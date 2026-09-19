import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ContentService } from '../../core/services/content.service';
import { readingTimeMinutes } from '../../core/utils/reading-time';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  template: `
    <article *ngIf="note$ | async as note; else notFound">
      <h1>{{ note.title }}</h1>
      <div class="meta">
        <time [attr.datetime]="note.date">{{ note.date | date:'longDate' }}</time>
      </div>
      <hr />
      <markdown [data]="note.body"></markdown>
    </article>
    <ng-template #notFound>
      <p class="empty">Note not found.</p>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {
  private route = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  slug = this.route.snapshot.params['slug'] || '';
  note$ = this.contentService.getNoteBySlug(this.slug);
}
