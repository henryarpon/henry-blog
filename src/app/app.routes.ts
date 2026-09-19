import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'blog', title: 'Blog', loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'blog/:slug', title: 'Post', loadComponent: () => import('./features/blog/post.component').then(m => m.PostComponent) },
  { path: 'notes', title: 'Notes', loadComponent: () => import('./features/notes/notes.component').then(m => m.NotesComponent) },
  { path: 'notes/:slug', title: 'Note', loadComponent: () => import('./features/notes/note.component').then(m => m.NoteComponent) },
  { path: 'references', title: 'References', loadComponent: () => import('./features/references/references.component').then(m => m.ReferencesComponent) },
  { path: 'reading', title: 'Reading', loadComponent: () => import('./features/reading/reading.component').then(m => m.ReadingComponent) },
  { path: 'about', title: 'About', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
  { path: '**', title: 'Not found', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) }
];

