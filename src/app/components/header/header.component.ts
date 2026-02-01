import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';
import { PortfolioData } from '../../data/portfolio-interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: PortfolioData = portfolioData;
  isScrolled = false;
  
  navlinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Education', link: '#education' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}