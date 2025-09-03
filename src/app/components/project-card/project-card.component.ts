import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() youtubeLink: string = '';
  @Input() websiteLink: string = '';
  @Input() imageUrls: string[] = [];
  @Input() devIconUrls: string[] = [];
}
