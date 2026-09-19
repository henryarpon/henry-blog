import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { Observable } from 'rxjs';
import { LinkItem } from '../../core/models/content.model';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadingComponent {
  private contentService = inject(ContentService);
  links$: Observable<LinkItem[]> = this.contentService.getLinks();
  lastSegment(path = '') { const parts = path.split('/'); return parts[parts.length-1] || path; }
}
