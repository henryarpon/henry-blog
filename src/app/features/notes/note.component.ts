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
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {
  private route = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  slug = this.route.snapshot.params['slug'] || '';
  note$ = this.contentService.getNoteBySlug(this.slug);
}
