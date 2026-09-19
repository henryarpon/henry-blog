import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container">
        <small>© Henry — <a routerLink="/about">About</a></small>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer { border-top: 1px solid var(--border); padding:1.25rem 0; color: var(--muted); }
    .site-footer a { color: inherit; text-decoration: underline; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
