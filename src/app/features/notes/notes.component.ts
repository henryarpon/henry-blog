import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { Note } from '../../core/models/content.model';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section aria-labelledby="notes-heading">
      <h1 id="notes-heading">Notes</h1>
      <ul class="list-rows">
        <li *ngFor="let note of notes$ | async" class="row">
          <time [attr.datetime]="note.date">{{ note.date | date:'mediumDate' }}</time>
          <div class="content">
            <a [routerLink]="['/notes', note.slug]" class="title">{{ note.title }}</a>
            <p class="summary">{{ firstLine(note.body) }}</p>
          </div>
        </li>
      </ul>
      <div *ngIf="(notes$ | async)?.length === 0" class="empty">No notes yet — short notes will appear here.</div>
    </section>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {
  private contentService = inject(ContentService);
  notes$: Observable<Note[]> = this.contentService.getNotes();
  firstLine = (md = '') => (md || '').split(/\r?\n/)[0] || '';
}
