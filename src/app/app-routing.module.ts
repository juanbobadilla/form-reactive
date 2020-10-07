import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';

import {FormReactiveComponent} from './Components/form-reactive/form-reactive.component'

const routes: Routes = [
  {path:'',component:FormReactiveComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
