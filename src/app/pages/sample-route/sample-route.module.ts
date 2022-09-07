import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './component-a/child-a/child-a.component';
import { ChildBComponent } from './component-a/child-b/child-b.component';
import { HomeModule } from '../home/home.module';
import { PagesModule } from '../pages.module';

const routes: Routes =[
  {
    path: 'component-a',
    component:ComponentAComponent,
    children: [
      {
        path:'child-a',
        component:ChildAComponent
      },
      {
        path:'child-b',
        component:ChildBComponent
      }
    ]
  },
  {
    path: 'component-b',
    component:ComponentBComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SampleRouteModule {}
