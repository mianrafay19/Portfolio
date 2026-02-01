import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';
import { TabComponent } from '../reusable/tab/tab.component';
import { PortfolioData } from '../../data/portfolio-interfaces';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TabComponent], // Removed MatTabsModule and MatTooltipModule
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  data: PortfolioData = portfolioData;
  // skills = this.data.skills;

  getSkillIcon(skill: string): string {
    const iconMap: { [key: string]: string } = {
      HTML5: 'devicon-html5-plain colored',
      HTML: 'devicon-html5-plain colored',
      CSS: 'devicon-css3-plain colored',
      'CSS3/SCSS': 'devicon-css3-plain colored',
      'Tailwind CSS': 'devicon-tailwindcss-plain colored',
      Bootstrap: 'devicon-bootstrap-plain colored',
      JavaScript: 'devicon-javascript-plain colored',
      'JavaScript (ES6+)': 'devicon-javascript-plain colored',
      TypeScript: 'devicon-typescript-plain colored',
      Angular: 'devicon-angularjs-plain colored',
      'Angular Material': 'devicon-materialui-plain colored',
      PrimeNG: 'devicon-angularjs-plain colored',
      RxJS: 'devicon-rxjs-plain colored',
      NgRx: 'devicon-redux-original colored',
      Firebase: 'devicon-firebase-plain colored',
      Git: 'devicon-git-plain colored',
      GitHub: 'devicon-github-original colored',
      'C#': 'devicon-csharp-plain colored',
      Python: 'devicon-python-plain colored',
      'ASP.NET Core': 'devicon-dotnetcore-plain colored',
      'Microsoft SQL Server': 'devicon-microsoftsqlserver-plain colored',
      Postman: 'devicon-postman-plain colored',
      'VS Code': 'devicon-vscode-plain colored',
      'Visual Studio Community': 'devicon-visualstudio-plain colored',
      'SQL Server Management Studio': 'fas fa-database',

      // Microsoft Office
      'Microsoft Word': 'fas fa-file-word',
      'Microsoft Excel': 'fas fa-file-excel',
      'Microsoft PowerPoint': 'fas fa-file-powerpoint',
      'Microsoft Outlook': 'fas fa-envelope',
      'Microsoft Access': 'fas fa-database',
    };

    return iconMap[skill] || 'fas fa-code';
  }
}
