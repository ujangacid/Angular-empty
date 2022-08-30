import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleRouteModule } from '../sample-route/sample-route.module';
import { BlogModule } from './home/blog/blog.module';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, HomeModule,BlogModule,SampleRouteModule],
  exports: [PagesComponent],
})
export class PagesModule {}
