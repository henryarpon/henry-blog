import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  template: `
    <section>
      <h1>Notes</h1>
      <p class="muted">Running log of short notes will appear here.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {}
