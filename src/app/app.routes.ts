import { Routes } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { FormationComponent } from './Components/formation/formation.component';

export const routes: Routes = [
    {path:'nav',component:NavComponent},
    {path:'home',component:HomeComponent},
    {path:'formation',component:FormationComponent},

];
