import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { AnimeComponent } from './anime/anime.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [PagesComponent, AnimeComponent],
  imports: [CommonModule, HomeModule, HomeRoutingModule,PagesRoutingModule,TodoModule],
  exports: [PagesComponent,AnimeComponent],
})
export class PagesModule {}{}
