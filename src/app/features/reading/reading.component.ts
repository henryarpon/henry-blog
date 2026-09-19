import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reading',
  standalone: true,
  template: `
    <section>
      <h1>Reading</h1>
      <p class="muted">Links and articles you're reading will be listed here.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadingComponent {}
