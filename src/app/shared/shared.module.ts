import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollDirective } from './directive/scroll/scroll.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { BsButtonDirective } from './directive/bs-button/bs-button.directive';
import { DateCustomPipe } from './pipes/date-custom/date-custom.pipe';

const components = [HeaderComponent, FooterComponent, NotFoundComponent,DateCustomPipe,BsButtonDirective];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class SharedModule {}
