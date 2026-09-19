import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { Observable } from 'rxjs';
import { Video } from '../../core/models/content.model';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  private contentService = inject(ContentService);
  videos$: Observable<Video[]> = this.contentService.getVideos();
  channelUrl = siteConfig.channelUrl;

  thumbnailUrl(id: string) { return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }
  videoUrl(id: string) { return `https://www.youtube.com/watch?v=${id}`; }
  onThumbError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.closest('.thumb') as HTMLElement | null;
    if (parent) parent.classList.add('thumb-error');
  }
}
