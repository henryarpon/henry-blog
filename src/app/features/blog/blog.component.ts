import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section>
      <h1>Blog</h1>
      <p class="muted">All posts will be listed here.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {}
