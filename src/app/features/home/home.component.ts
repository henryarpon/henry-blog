import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentService } from '../../core/services/content.service';
import { Post, ContentItem } from '../../core/models/content.model';
import { siteConfig } from '../../core/config/site.config';
import { readingTimeMinutes } from '../../core/utils/reading-time';
import { typeLabel } from '../../core/utils/type-label';

type ActivityGroup = { date: string; items: ContentItem[] };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private cs = inject(ContentService);
  site = siteConfig;
  recentPosts$: Observable<Post[]> = this.cs.getPosts().pipe(map(p => p.slice(0, 5)));
  activity$: Observable<ContentItem[]> = this.cs.getRecentActivity(10);

  counts: { posts?: number; notes?: number; videos?: number; links?: number } = {};
  constructor(){
    combineLatest([
      this.cs.getPosts(), this.cs.getNotes(), this.cs.getVideos(), this.cs.getLinks()
    ]).pipe(
      map(([posts, notes, videos, links]) => ({ posts: posts.length, notes: notes.length, videos: videos.length, links: links.length }))
    ).subscribe(c => this.counts = c);
  }

  readingTime = (md = '') => readingTimeMinutes(md);
  lastSegment(path = '') { const parts = path.split('/'); return parts[parts.length-1] || path; }
  videoUrl(id: string) { return `https://www.youtube.com/watch?v=${id}`; }

  noteLink(item: ContentItem) { return item.type === 'note' ? ['/notes', (item as any).slug] : ['/']; }
  videoHref(item: ContentItem) { return item.type === 'video' ? this.videoUrl((item as any).videoId) : null; }
  linkHref(item: ContentItem) { return item.type === 'link' ? (item as any).url : null; }

  postCategory = typeLabel('post');
  itemCategory(item: ContentItem) { return typeLabel(item.type); }
}
