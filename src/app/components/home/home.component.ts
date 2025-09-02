import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  images: HomeImage[] = [
    {
      src: 'images/react-background.jpg',
      alt: 'code on screen',
      title: 'Full stack developer',
      description: 'Web design',
      clickUrl: 'about',
    },
    {
      src: 'images/dv-hero-2.png',
      alt: 'Donna vino project',
      title: 'Project: Donna Vino',
      description: 'A full-stack e-commerce web application for a wine store.',
      clickUrl: 'project-one',
    },
    {
      src: 'images/dv-hero-2.png',
      alt: 'Donna vino project',
      title: 'Project: Donna Vino',
      description: 'A full-stack e-commerce web application for a wine store.',
      clickUrl: 'project-one',
    },
  ];

  currentIndex: number = 0;
}
