import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  template: `
    <article>
      <h1>Note</h1>
      <p class="muted">Note detail (slug: {{ slug }}).</p>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {
  slug = '';
  constructor(route: ActivatedRoute) {
    this.slug = route.snapshot.params['slug'] || '';
  }
}
