# Todo Workspace

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![Lit](https://img.shields.io/badge/Lit-3-324FFF?logo=lit&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A modern Todo app built with **Angular 21** and reusable **Lit Web Components**.

It supports personal/professional todo views, inline editing, delete confirmation, and persistent storage with `localStorage`.

## Preview

### Screenshot

Add your latest UI screenshot at `docs/assets/todo-workspace.png`, then use:

```markdown
![Todo Workspace Screenshot](docs/assets/todo-workspace.png)
```

### Demo GIF

Add a short walkthrough GIF at `docs/assets/todo-workspace-demo.gif`, then use:

```markdown
![Todo Workspace Demo](docs/assets/todo-workspace-demo.gif)
```

## Features

- Separate todo lists for **Personal** and **Professional** categories
- Add, toggle, edit, and delete todos
- Inline edit mode with save/cancel actions
- Delete confirmation before removal
- Save button disabled for empty edit values
- Clear all completed todos
- State persistence across refreshes via `localStorage`
- In-app docs page describing all Lit elements and their behavior
- RTL-friendly styling using logical CSS properties (e.g. `margin-inline-start`)

## Tech Stack

- Angular 21
- Angular Signals
- Lit 3 (Web Components)
- RxJS
- TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

Open http://localhost:4200

## Scripts

- `npm start` — Start dev server
- `npm run build` — Production build
- `npm run watch` — Development build in watch mode

## Routes

- `/personal` — Personal todo workspace
- `/professional` — Professional todo workspace
- `/docs` — Lit elements documentation page

## Project Structure

```text
src/
	app/
		todo-page.*          # Main todo experience
		docs-page.*          # Lit elements documentation page
		todo-store.service.ts# State management + localStorage persistence
	lit/
		lit-button/
		lit-checkbox/
		lit-textbox/
		lit-navbar/          # Reusable Lit web components
	design-system/         # Tokens and shared styling primitives
```

## Notes

- Default todo lists are empty on first load.
- Data is stored in browser `localStorage` under the key `todo-app-state`.

---

Built for practicing Angular + Lit integration with a shared design system.
