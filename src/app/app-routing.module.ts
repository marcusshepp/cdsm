import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GainsComponent } from './gains/gains.component';


const routes: Routes = [
  { path: '*', component: GainsComponent },
  { path: 'gains', component: GainsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
