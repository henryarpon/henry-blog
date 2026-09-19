import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOCK_CONTENT } from '../data/mock-content';
import { ContentItem, Post, Note, Video, LinkItem } from '../models/content.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  // Keep a local copy to avoid accidental mutation
  private readonly items: ContentItem[] = MOCK_CONTENT.map(i => ({ ...i }));

  getPosts(): Observable<Post[]> {
    return of(this.items.filter((i): i is Post => i.type === 'post').slice().sort((a, b) => +new Date(b.date) - +new Date(a.date)));
  }

  getPostBySlug(slug: string): Observable<Post | undefined> {
    const found = this.items.find((i): i is Post => i.type === 'post' && 'slug' in i && i.slug === slug);
    return of(found ? { ...found } : undefined);
  }

  getNotes(): Observable<Note[]> {
    return of(this.items.filter((i): i is Note => i.type === 'note').slice().sort((a, b) => +new Date(b.date) - +new Date(a.date)));
  }

  getNoteBySlug(slug: string): Observable<Note | undefined> {
    const found = this.items.find((i): i is Note => i.type === 'note' && 'slug' in i && i.slug === slug);
    return of(found ? { ...found } : undefined);
  }

  getVideos(): Observable<Video[]> {
    return of(this.items.filter((i): i is Video => i.type === 'video').slice().sort((a, b) => +new Date(b.date) - +new Date(a.date)));
  }

  getLinks(): Observable<LinkItem[]> {
    return of(this.items.filter((i): i is LinkItem => i.type === 'link').slice().sort((a, b) => +new Date(b.date) - +new Date(a.date)));
  }

  getRecentActivity(limit = 12): Observable<ContentItem[]> {
    const merged = this.items.filter(i => i.type === 'note' || i.type === 'video' || i.type === 'link');
    const sorted = merged.slice().sort((a, b) => +new Date(b.date) - +new Date(a.date));
    return of(sorted.slice(0, limit).map(i => ({ ...i })));
  }
}
