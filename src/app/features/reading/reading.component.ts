import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { Observable } from 'rxjs';
import { LinkItem } from '../../core/models/content.model';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section aria-labelledby="reading-heading">
      <h1 id="reading-heading">Reading</h1>

      <ul class="list-rows">
        <li *ngFor="let l of links$ | async" class="row">
          <a class="title" [href]="l.url" target="_blank" rel="noopener noreferrer">{{ l.title }}</a>
          <div class="meta-small">
            <span class="source">{{ l.source }}</span>
            <time [attr.datetime]="l.date"> · {{ l.date | date:'mediumDate' }}</time>
          </div>
          <div class="tags">
            <span *ngFor="let t of l.tags" class="tag" [title]="t">{{ lastSegment(t) }}</span>
          </div>
        </li>
      </ul>

      <div *ngIf="(links$ | async)?.length === 0" class="empty">No reading links yet — saved articles will appear here.</div>
    </section>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadingComponent {
  private contentService = inject(ContentService);
  links$: Observable<LinkItem[]> = this.contentService.getLinks();
  lastSegment(path = '') { const parts = path.split('/'); return parts[parts.length-1] || path; }
}
