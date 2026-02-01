import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data/portfolio-data';
import { PortfolioData } from '../../data/portfolio-interfaces';
import { AvatarComponent } from '../reusable/avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: PortfolioData = portfolioData;
  roles: string[] = [];
  currentRole: string = '';
  isDeleting: boolean = false;
  loopNum: number = 0;
  typingSpeed: number = 100;
  deletingSpeed: number = 50;

  ngOnInit(): void {
    this.roles = this.data.stack; // Assign roles from stack
    this.typeWriter();
  }

  get socialsLinks() {
    return {
      email: `mailto:${this.data.socials.email}`,
      phone: `tel:${this.data.socials.phone}`,
      github: this.data.socials.github,
      linkedin: this.data.socials.linkedin,
      whatsapp: `https://wa.me/${this.data.socials.whatsapp.replace(
        /\D/g,
        ''
      )}?text=${encodeURIComponent(this.data.socials.whatsappMessage)}`,
    };
  }

  typeWriter(): void {
    if (this.roles.length === 0) return; // Ensure roles are available

    const i = this.loopNum % this.roles.length;
    const fullText = this.roles[i];

    if (this.isDeleting) {
      this.currentRole = fullText.substring(0, this.currentRole.length - 1);
    } else {
      this.currentRole = fullText.substring(0, this.currentRole.length + 1);
    }

    let delta = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentRole === fullText) {
      delta = 2000; // Pause at the end of typing
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentRole === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500; // Pause before starting next word
    }

    setTimeout(() => this.typeWriter(), delta);
  }
}
