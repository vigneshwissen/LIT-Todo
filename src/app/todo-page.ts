import { CUSTOM_ELEMENTS_SCHEMA, Component, computed, signal, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoCategory, TodoStoreService } from './todo-store.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoPage implements OnInit, OnDestroy {
  protected readonly category = signal<TodoCategory>('personal');
  protected readonly title = computed(() =>
    this.category() === 'personal' ? 'Personal Todos' : 'Professional Todos'
  );
  protected readonly todos = computed(() => this.store.todos(this.category())());
  protected readonly pendingInput = signal('');
  protected readonly isAddDisabled = computed(() => this.pendingInput().trim() === '');
  protected readonly editingId = signal<number | null>(null);
  protected readonly editingText = signal('');
  protected readonly isEditSaveDisabled = computed(() => this.editingText().trim() === '');
  
  private routeSubscription?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: TodoStoreService
  ) {
    this.category.set(this.route.snapshot.data['category'] as TodoCategory);
  }

  ngOnInit(): void {
    // Subscribe to route data changes to update category when navigating between tabs
    this.routeSubscription = this.route.data.subscribe(data => {
      const newCategory = data['category'] as TodoCategory;
      if (newCategory && newCategory !== this.category()) {
        this.category.set(newCategory);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  protected onViewChange(event: Event): void {
    const view = (event as CustomEvent<TodoCategory>).detail;
    this.router.navigate([`/${view}`]);
  }

  protected onInputChange(event: Event): void {
    this.pendingInput.set((event as CustomEvent<string>).detail);
  }

  protected addTodo(): void {
    this.store.addTodo(this.category(), this.pendingInput());
    this.pendingInput.set('');
  }

  protected onToggle(todoId: number, event: Event): void {
    this.store.toggleTodo(
      this.category(),
      todoId,
      (event as CustomEvent<boolean>).detail
    );
  }

  protected clearCompleted(): void {
    this.store.removeDone(this.category());
  }

  protected deleteTodo(todoId: number): void {
    const todo = this.todos().find(t => t.id === todoId);
    if (!todo) return;
    
    const confirmed = confirm(`Are you sure you want to delete "${todo.text}"?`);
    if (confirmed) {
      this.store.deleteTodo(this.category(), todoId);
    }
  }

  protected navigateToDocs(): void {
    this.router.navigate(['/docs']);
  }

  protected startEdit(todoId: number, currentText: string): void {
    this.editingId.set(todoId);
    this.editingText.set(currentText);
  }

  protected onEditTextChange(event: Event): void {
    this.editingText.set((event as CustomEvent<string>).detail);
  }

  protected saveEdit(todoId: number): void {
    const newText = this.editingText().trim();
    if (newText) {
      this.store.editTodo(this.category(), todoId, newText);
    }
    this.editingId.set(null);
    this.editingText.set('');
  }

  protected cancelEdit(): void {
    this.editingId.set(null);
    this.editingText.set('');
  }
}
