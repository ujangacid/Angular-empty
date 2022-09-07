import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from '../resume/resume.component';
import { TodoComponent } from './todo/todo.component';
import { AnimeComponent } from './anime/anime.component';
import { SafeCall } from '@angular/compiler';
import { ComponentAComponent } from './sample-route/component-a/component-a.component';

const routes:Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'portofolio',
    component:ResumeComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'anime',
    component:AnimeComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
