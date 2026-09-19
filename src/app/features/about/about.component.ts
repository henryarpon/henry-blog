import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <article>
      <h1>About</h1>
      <p class="muted">Short bio and links. Replace this placeholder copy with your real bio.</p>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
