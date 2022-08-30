import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ComponentAComponent } from './sample-route/component-a.component';
import { ComponentBComponent } from './sample-route/component-b.component';

const routes: Routes = [
  {
    path: '',
    component:ComponentAComponent //path to component A
  },
  {
    path:'component-b',
    component:ComponentBComponent //path to component B
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
