import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PortofolioComponent } from './pages/home/portofolio/portofolio.component';
import { PagesComponent } from './pages/pages.component';
import { ResumeComponent } from './resume/resume.component';
import { ChildAComponent } from './sample-route/component-a/child-a/child-a.component';
import { ChildBComponent } from './sample-route/component-a/child-b/child-b.component';
import { ComponentAComponent } from './sample-route/component-a/component-a.component';
import { ComponentBComponent } from './sample-route/component-b/component-b.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  // { path: '', component: PagesComponent },
  // { path: 'portofolio', component: ResumeComponent },
  // { path: 'todo', component: TodoComponent },
  // {
  //   path: 'component-a',
  //   component: ComponentAComponent,
  //   children: [
  //     {
  //       path: 'child-a',
  //       component: ChildAComponent,
  //     },
  //     { path: 'child-b', component: ChildBComponent },
  //     { path: 'child-b/:id', component: ChildBComponent },
  //   ],
  // }, //path itu urlnya, component itu ocmponent yang akan di load
  // { path: 'component-b', component: ComponentBComponent },
  // { path: '', redirectTo: '/component-a', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
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
