import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <article>
      <h1>Hi — I write about building software.</h1>
      <p class="lead">Short intro goes here. A quiet, text-first personal site for blog posts, notes, and references. <a routerLink="/about">About</a></p>
      <section aria-labelledby="recent-posts">
        <h2 id="recent-posts">Recent posts</h2>
        <p class="muted">Placeholder — posts will appear here.</p>
      </section>
      <hr />
      <section aria-labelledby="recent-activity">
        <h2 id="recent-activity">Recent activity</h2>
        <p class="muted">Placeholder — mixed feed of notes, videos and links.</p>
      </section>
    </article>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
