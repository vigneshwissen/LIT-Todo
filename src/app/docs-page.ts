import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class DocsPage {
  constructor(private readonly router: Router) {}

  protected goBack(): void {
    this.router.navigate(['/']);
  }
}
