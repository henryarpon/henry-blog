import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ContentService } from '../../core/services/content.service';
import { readingTimeMinutes } from '../../core/utils/reading-time';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  template: `
    <article *ngIf="post$ | async as post; else notFound">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <time [attr.datetime]="post.date">{{ post.date | date:'longDate' }}</time>
        <span class="reading">{{ readingTime(post.body) }} min</span>
      </div>
      <div class="tags">
        <span *ngFor="let t of post.tags" class="tag" [title]="t">{{ lastSegment(t) }}</span>
      </div>
      <hr />
      <markdown [data]="post.body"></markdown>
    </article>
    <ng-template #notFound>
      <p class="empty">Post not found.</p>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  private route = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  slug = this.route.snapshot.params['slug'] || '';
  post$ = this.contentService.getPostBySlug(this.slug);
  readingTime = (md = '') => readingTimeMinutes(md);
  lastSegment(path = '') { const parts = path.split('/'); return parts[parts.length-1] || path; }
}
