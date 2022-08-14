import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatCardModule, RouterModule],
  declarations: [HouseComponent],
  exports: [HouseComponent],
})
export class HouseModule {}
