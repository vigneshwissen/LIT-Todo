import { Injectable, computed, signal, effect } from '@angular/core';

export type TodoCategory = 'personal' | 'professional';

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoStoreService {
  private readonly STORAGE_KEY = 'todo-app-state';
  private readonly DEFAULT_STATE: Record<TodoCategory, TodoItem[]> = {
    personal: [],
    professional: []
  };

  private readonly state = signal<Record<TodoCategory, TodoItem[]>>(this.loadFromStorage());
  private nextId: number;

  constructor() {
    // Initialize nextId after state is set
    this.nextId = this.getMaxId() + 1;

    // Save to localStorage whenever state changes
    effect(() => {
      this.state();
      this.saveToStorage();
    });
  }

  private loadFromStorage(): Record<TodoCategory, TodoItem[]> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : this.DEFAULT_STATE;
    } catch {
      return this.DEFAULT_STATE;
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state()));
    } catch {
      console.error('Failed to save todos to localStorage');
    }
  }

  private getMaxId(): number {
    const allTodos = [...this.state().personal, ...this.state().professional];
    return allTodos.length > 0 ? Math.max(...allTodos.map(t => t.id)) : 0;
  }

  todos(category: TodoCategory) {
    return computed(() => this.state()[category]);
  }

  addTodo(category: TodoCategory, text: string): void {
    const normalizedText = text.trim();
    if (!normalizedText) {
      return;
    }

    this.state.update((state) => ({
      ...state,
      [category]: [
        ...state[category],
        {
          id: this.nextId++,
          text: normalizedText,
          done: false
        }
      ]
    }));
  }

  toggleTodo(category: TodoCategory, todoId: number, done: boolean): void {
    this.state.update((state) => ({
      ...state,
      [category]: state[category].map((todo) =>
        todo.id === todoId ? { ...todo, done } : todo
      )
    }));
  }

  removeDone(category: TodoCategory): void {
    this.state.update((state) => ({
      ...state,
      [category]: state[category].filter((todo) => !todo.done)
    }));
  }

  deleteTodo(category: TodoCategory, todoId: number): void {
    this.state.update((state) => ({
      ...state,
      [category]: state[category].filter((todo) => todo.id !== todoId)
    }));
  }

  editTodo(category: TodoCategory, todoId: number, newText: string): void {
    const normalizedText = newText.trim();
    if (!normalizedText) {
      return;
    }

    this.state.update((state) => ({
      ...state,
      [category]: state[category].map((todo) =>
        todo.id === todoId ? { ...todo, text: normalizedText } : todo
      )
    }));
  }
}
