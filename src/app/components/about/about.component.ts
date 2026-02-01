import { Component, inject } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';
import { PortfolioData } from '../../data/portfolio-interfaces';
import { FileService } from '../../services/file/file.service';
import { TabComponent } from '../reusable/tab/tab.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TabComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  data: PortfolioData = portfolioData;

  private fileService = inject(FileService);

  downloadResume(fileUrl: string): void {
    this.fileService.downloadFile(fileUrl);
  }

  viewResume(fileUrl: string): void {
    this.fileService.viewFile(fileUrl);
  }
}
