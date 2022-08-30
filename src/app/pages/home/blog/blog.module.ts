import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';
import { BlogFormComponent } from './component/form/blog-form.component';
import { BlogListComponent } from './component/list/blog-list.component';




@NgModule({
  declarations: [BlogFormComponent,BlogListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlogListComponent,
    BlogFormComponent
  ]
})
export class BlogModule { }
