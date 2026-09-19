import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { Post } from '../../core/models/content.model';
import { readingTimeMinutes } from '../../core/utils/reading-time';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section aria-labelledby="blog-heading">
      <h1 id="blog-heading">Blog</h1>
      <ul class="list-rows">
        <li *ngFor="let post of posts$ | async" class="row">
          <div class="meta">
            <time [attr.datetime]="post.date">{{ post.date | date:'mediumDate' }}</time>
            <span class="reading">{{ readingTime(post.body) }} min</span>
          </div>
          <div class="content">
            <a [routerLink]="['/blog', post.slug]" class="title">{{ post.title }}</a>
            <p class="summary">{{ post.summary }}</p>
          </div>
        </li>
      </ul>
      <div *ngIf="(posts$ | async)?.length === 0" class="empty">No posts yet — published posts will appear here.</div>
    </section>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  private contentService = inject(ContentService);
  posts$: Observable<Post[]> = this.contentService.getPosts();
  readingTime = (md = '') => readingTimeMinutes(md);
}
