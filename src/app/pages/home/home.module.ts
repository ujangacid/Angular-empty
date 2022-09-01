import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { ServiceComponent } from './service/service.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center/center.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    PortofolioComponent,
    CenterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent]
})
export class HomeModule { }
