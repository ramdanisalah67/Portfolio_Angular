import {  Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormationComponent } from "../formation/formation.component";
import { ExperienceComponent } from '../experience/experience.component';
import { CompetencesComponent } from "../competences/competences.component";
import { CertifsComponent } from "../certifs/certifs.component";
import { ContactComponent } from "../contact/contact.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, FormationComponent, ExperienceComponent, CompetencesComponent, CertifsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {


}