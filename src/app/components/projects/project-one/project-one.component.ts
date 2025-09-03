import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../project-card/project-card.component';

@Component({
  selector: 'app-project-one',
  imports: [ProjectCardComponent],
  templateUrl: './project-one.component.html',
  styleUrl: './project-one.component.css',
})
export class ProjectOneComponent {}
