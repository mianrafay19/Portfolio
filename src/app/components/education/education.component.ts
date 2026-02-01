import { Component, inject } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';
import { FileService } from '../../services/file/file.service';
import { TabComponent } from '../reusable/tab/tab.component';
import { PortfolioData } from '../../data/portfolio-interfaces';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TabComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  data: PortfolioData = portfolioData;
  private fileService = inject(FileService);

  viewDocument(fileUrl: string): void {
    this.fileService.viewFile(fileUrl);
  }
}
