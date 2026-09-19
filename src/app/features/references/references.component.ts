import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  template: `
    <section>
      <h1>References</h1>
      <p class="muted">YouTube video grid will appear here.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {}
