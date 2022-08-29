import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextStepComponent } from './next-step/next-step.component';
import { ResourceComponent } from './resource/resource.component';
import { PortoComponent } from './porto/porto.component';

const component = [
  NextStepComponent,
  ResourceComponent,
  PortoComponent
]


@NgModule({
  declarations: [
    component,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    component
  ]
})
export class HomeModule { }
