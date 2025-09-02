import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectOneComponent } from './components/projects/project-one/project-one.component';
import { ProjectTwoComponent } from './components/projects/project-two/project-two.component';
import { ProjectThreeComponent } from './components/projects/project-three/project-three.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: HeroComponent },

  { path: 'projects/project-one', component: ProjectOneComponent },
  { path: 'projects/project-two', component: ProjectTwoComponent },
  { path: 'projects/project-three', component: ProjectThreeComponent },

  { path: 'contact', component: ContactComponent },
];
