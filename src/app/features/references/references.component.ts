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
  template: `
    <section aria-labelledby="references-heading">
      <div class="references-header">
        <h1 id="references-heading">References</h1>
        <a class="channel-link" [href]="channelUrl" target="_blank" rel="noopener noreferrer">My channel</a>
      </div>

      <div *ngIf="(videos$ | async)?.length === 0" class="empty">No videos yet — posted videos will appear here.</div>

      <div class="grid" role="list">
        <article *ngFor="let v of videos$ | async" class="video-card" role="listitem">
          <a [href]="videoUrl(v.videoId)" target="_blank" rel="noopener noreferrer" class="card-link">
            <div class="thumb">
              <img class="thumb-img" [src]="thumbnailUrl(v.videoId)" [alt]="v.title + ' thumbnail'" (error)="onThumbError($event)" />
              <div class="thumb-fallback" aria-hidden="true">Video</div>
            </div>
            <div class="card-body">
              <div class="card-title">{{ v.title }}</div>
              <div class="card-desc">{{ v.description }}</div>
            </div>
          </a>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .references-header { display:flex; justify-content:space-between; align-items:center; gap:1rem; }
    .channel-link { font-size:0.9rem; color:var(--muted); text-decoration: underline; }
    .grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:1rem; margin-top:1rem; }
    .video-card { background: transparent; border: 1px solid var(--border); border-radius:6px; overflow:hidden; }
    .card-link { display:flex; flex-direction:column; color:inherit; text-decoration:none; height:100%; }
    .thumb { width:100%; aspect-ratio:16/9; background:#333; display:block; position:relative; }
    .thumb img { width:100%; height:100%; object-fit:cover; display:block; }
    .thumb-fallback { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:var(--muted); font-size:0.9rem; }
    .card-body { padding:0.6rem 0.75rem; }
    .card-title { font-weight:700; margin-bottom:0.25rem; }
    .card-desc { color:var(--muted); font-size:0.95rem; }
  `],
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
