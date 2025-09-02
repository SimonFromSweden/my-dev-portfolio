import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface HeroImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  bgColor: string;
  clickUrl: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  images: HeroImage[] = [
    {
      src: 'images/dv-hero-2.png',
      alt: 'Donna vino project',
      title: 'Project: Donna Vino',
      description: 'A full-stack e-commerce web application for a wine store.',
      bgColor: 'bg-[#fa7878]',
      clickUrl: 'project-one',
    },
    {
      src: 'images/ds-hero-1.png',
      alt: 'DiscShop project',
      title: 'Project: DiscShop',
      description:
        'A full-stack e-commerce web application for a disc golf store.',
      bgColor: 'bg-[#34eba1]',
      clickUrl: 'project-two',
    },
    {
      src: 'images/optima-hero-2.png',
      alt: 'Optima Roslagen project',
      title: 'Project: Optima Roslagen',
      description: 'A mock website for a hotel located in Norrtälje.',
      bgColor: 'bg-[#F5B027]',
      clickUrl: 'project-three',
    },
  ];

  constructor(private router: Router) {}

  goToProject(projectRoute: string) {
    this.router.navigate([`/projects/${projectRoute}`]);
  }

  currentIndex: number = 0;

  fadingOut: boolean = false;

  nextImage(): void {
    this.fadingOut = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.fadingOut = false;
    }, 300);
  }

  prevImage(): void {
    this.fadingOut = true;
    setTimeout(() => {
      this.currentIndex =
        this.currentIndex === 0
          ? this.images.length - 1
          : this.currentIndex - 1;
      this.fadingOut = false;
    }, 300);
  }
}
