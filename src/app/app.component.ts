import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from "./components/home/home.component";
import { ThemeComponent } from "./components/reusable/theme/theme.component";
import { EducationComponent } from "./components/education/education.component";

@Component({
  selector: 'app-root',
  imports: [
    AboutComponent,
    HeaderComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    ThemeComponent,
    EducationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-website';
}
