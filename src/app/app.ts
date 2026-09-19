import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="site-main">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('Henry Blog');
}
