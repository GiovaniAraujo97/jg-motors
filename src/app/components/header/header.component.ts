import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    const saved = localStorage.getItem('jg-theme') as 'light' | 'dark' | null;
    if (saved) {
      this.setTheme(saved);
    } else {
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefers ? 'dark' : 'light');
    }
  }

  toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');
  }

  private setTheme(value: 'light' | 'dark') {
    this.theme = value;
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem('jg-theme', value);
  }
}

