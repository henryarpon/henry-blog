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
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
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
