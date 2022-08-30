import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, HomeModule],
  exports: [PagesComponent],
})
export class PagesModule {}
