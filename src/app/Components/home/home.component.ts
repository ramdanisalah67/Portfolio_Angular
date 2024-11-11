import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import anime from 'animejs/lib/anime.es.js';
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
export class HomeComponent  implements AfterViewInit {
  @ViewChild('myElement') myElement!: ElementRef;
  @ViewChild('title') title!: ElementRef;


  ngAfterViewInit() {
    this.animateTitle()

    setTimeout(()=>{
      this.animateElement();
    },200)
  }

  hello(){
    console.log("hello")
  }

  animateElement() {
    anime({
      targets: this.myElement.nativeElement,
      translateX: 0,
      opacity:1,
      duration: 2000
    });
  }

  animateTitle() {
    anime({
      targets: this.title.nativeElement,
      opacity: 1,
      duration: 2000
    });
  }


}
