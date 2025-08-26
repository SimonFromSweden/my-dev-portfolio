import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroImage {
  src: string;
  alt: string;
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
      src: 'images/hero-test.jpg',
      alt: 'ocean',
    },
    {
      src: 'images/hero-test2.jpg',
      alt: 'splash of color',
    },
    {
      src: 'images/hero-test3.jpg',
      alt: 'splash of color 2',
    },
  ];

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
