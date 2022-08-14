import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailsComponent } from './house-details.component';
import { HouseDetailsListModule } from '../../components/house-details-list/house-details-list.module';

@NgModule({
  declarations: [HouseDetailsComponent],
  imports: [CommonModule, HouseDetailsListModule],
  exports: [HouseDetailsComponent],
})
export class HouseDetailsModule {}
