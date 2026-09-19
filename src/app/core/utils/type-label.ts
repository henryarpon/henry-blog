import { ContentType } from '../models/content.model';

export function typeLabel(t: ContentType): string {
  switch (t) {
    case 'post': return 'essay';
    case 'note': return 'note';
    case 'video': return 'video';
    case 'link': return 'article';
    default: return t;
  }
}
