import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = portfolioData.projects;
  toggleDescription(project: any) {
    project.expanded = !project.expanded;
  }
}
