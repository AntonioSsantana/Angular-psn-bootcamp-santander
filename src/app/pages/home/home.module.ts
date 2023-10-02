import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
