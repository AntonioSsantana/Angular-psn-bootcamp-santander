import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardLabelComponent } from 'src/app/components/card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
