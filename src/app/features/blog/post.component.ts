import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  template: `
    <article>
      <h1>Post</h1>
      <p class="muted">Post detail (slug: {{ slug }}).</p>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  slug = ''; 
  constructor(route: ActivatedRoute) {
    this.slug = route.snapshot.params['slug'] || '';
  }
}
