import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services/services.component';
import { ParalaxComponent } from './paralax/paralax.component';

@NgModule({
  declarations: [HeroComponent, AboutComponent, HomeComponent, ServicesComponent, ParalaxComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
