import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { Note } from '../../core/models/content.model';
import { typeLabel } from '../../core/utils/type-label';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {
  private contentService = inject(ContentService);
  notes$: Observable<Note[]> = this.contentService.getNotes();
  firstLine = (md = '') => (md || '').split(/\r?\n/)[0] || '';
  categoryLabel = typeLabel('note');
}
