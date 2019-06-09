import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarComponent } from './car.component';
import { FormCarComponent } from './form-car/form-car.component';
import { ListCarComponent } from './list-car/list-car.component';

@NgModule({
  declarations: [CarComponent, FormCarComponent, ListCarComponent],
  imports: [
    CommonModule,
  ]
})
export class CarModule { }
