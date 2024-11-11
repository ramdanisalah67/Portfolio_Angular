import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience',
  standalone:true,
  imports:[MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
