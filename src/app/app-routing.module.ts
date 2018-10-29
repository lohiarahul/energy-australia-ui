import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarshowComponent } from './components/carshow/carshow.component';

const routes: Routes = [
  { path: '', redirectTo: '/car-show', pathMatch: 'full' },
  { path: 'car-show', component: CarshowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
