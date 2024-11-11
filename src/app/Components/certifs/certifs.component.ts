import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-certifs',
  standalone:true,
  imports:[IonicModule],
  templateUrl: './certifs.component.html',
  styleUrls: ['./certifs.component.scss'],
})
export class CertifsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
