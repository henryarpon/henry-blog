import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <section>
      <h1>Not found</h1>
      <p class="muted">The page you were looking for doesn't exist. <a routerLink="/">Go home</a>.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {}
