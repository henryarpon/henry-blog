export type ContentType = 'post' | 'note' | 'video' | 'link';

export interface BaseItem {
  id: string;
  type: ContentType;
  title: string;
  date: string; // ISO 8601
  tags: string[];
}

export interface Post extends BaseItem {
  type: 'post';
  slug: string;
  summary: string;
  body: string; // Markdown
}

export interface Note extends BaseItem {
  type: 'note';
  slug: string;
  body: string; // Markdown
}

export interface Video extends BaseItem {
  type: 'video';
  videoId: string; // YouTube video ID
  description: string;
}

export interface LinkItem extends BaseItem {
  type: 'link';
  url: string;
  source: string;
}

export type ContentItem = Post | Note | Video | LinkItem;
