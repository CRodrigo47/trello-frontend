import { Component, DOCUMENT, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trello-frontend');

  public isDarkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      this.isDarkMode = false;
      this.document.documentElement.classList.remove('dark');
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (this.isDarkMode) {
        this.document.documentElement.classList.add('dark');
      }
    }
  }

  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
