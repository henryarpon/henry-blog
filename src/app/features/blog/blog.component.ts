import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { Post } from '../../core/models/content.model';
import { readingTimeMinutes } from '../../core/utils/reading-time';
import { typeLabel } from '../../core/utils/type-label';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  private contentService = inject(ContentService);
  posts$: Observable<Post[]> = this.contentService.getPosts();
  readingTime = (md = '') => readingTimeMinutes(md);
  categoryLabel = typeLabel('post');
}
