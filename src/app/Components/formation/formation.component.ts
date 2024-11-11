import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import anime from 'animejs';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements AfterViewInit {
  @ViewChildren('formation') formationElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.animateElements();
  }

  animateElements() {
    this.formationElements.forEach((formation) => {
      anime({
        targets: formation.nativeElement,
        scale: 1,
        opacity:1,
        duration: 2000,
      });
    });
  }


}