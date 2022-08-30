import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './pages/pages.module';
import { SampleRouteModule } from './sample-route/sample-route.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, PagesModule,AppRoutingModule,RouterModule,SampleRouteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
