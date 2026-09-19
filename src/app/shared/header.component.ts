import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <a class="site-title" routerLink="/">Henry Blog</a>
        <nav class="main-nav" aria-label="Primary">
          <a routerLink="/blog">Blog</a>
          <a routerLink="/notes">Notes</a>
          <a routerLink="/references">References</a>
          <a routerLink="/reading">Reading</a>
          <a routerLink="/about">About</a>
        </nav>
        <div class="header-actions">
          <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">Theme</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .site-header { border-bottom: 1px solid var(--border); }
    .header-inner { display:flex; gap:1rem; align-items:center; justify-content:space-between; padding:1rem 0; }
    .site-title { font-weight:700; text-decoration:none; }
    .main-nav { display:flex; gap:0.75rem; }
    .main-nav a { color:var(--muted); text-decoration: none; }
    .main-nav a:hover, .main-nav a:focus { color:var(--text); text-decoration: underline; }
    .theme-toggle { background:transparent; border:1px solid var(--border); padding:0.35rem 0.6rem; border-radius:4px; color:var(--muted); }
    .theme-toggle:focus { outline:2px solid var(--border); }
    @media (max-width:640px) { .main-nav { display:none; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  toggleTheme() {
    try {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('site-theme', next);
    } catch (e) {
      // ignore
    }
  }
}
