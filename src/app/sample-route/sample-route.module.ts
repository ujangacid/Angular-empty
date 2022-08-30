import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a.component';
import { ComponentBComponent } from './component-b.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    ComponentAComponent,
    ComponentBComponent
  ]
})
export class SampleRouteModule { }
