import { Routes } from '@angular/router';
import { TodoPage } from './todo-page';
import { DocsPage } from './docs-page';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'personal' },
	{ path: 'personal', component: TodoPage, data: { category: 'personal' } },
	{
		path: 'professional',
		component: TodoPage,
		data: { category: 'professional' }
	},
	{ path: 'docs', component: DocsPage },
	{ path: '**', redirectTo: 'personal' }
];
