import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface HomeImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  clickUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  images: HomeImage[] = [
    {
      src: 'images/react-background.jpg',
      alt: 'code on screen',
      title: 'Full stack developer',
      description: 'Web design',
      clickUrl: 'about',
    },
    {
      src: 'images/projects-home.jpg',
      alt: 'projects image',
      title: 'See my projects',
      description: '',
      clickUrl: 'projects',
    },
    {
      src: 'images/contact-home.jpg',
      alt: 'contact image',
      title: 'Get in touch',
      description: '',
      clickUrl: 'contact',
    },
  ];

  currentIndex: number = 0;

  navigateTo() {
    this.router.navigate([this.images[this.currentIndex].clickUrl]);
  }
}
