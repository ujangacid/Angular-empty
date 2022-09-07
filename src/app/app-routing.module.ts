import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PortofolioComponent } from './pages/home/portofolio/portofolio.component';
import { PagesComponent } from './pages/pages.component';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'**',
    component:NotFoundComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
