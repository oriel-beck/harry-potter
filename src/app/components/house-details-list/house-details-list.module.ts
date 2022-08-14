import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailsListComponent } from './house-details-list.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SubHeaderModule } from '../sub-header/sub-header.module';

@NgModule({
  declarations: [HouseDetailsListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    SubHeaderModule,
  ],
  exports: [HouseDetailsListComponent],
})
export class HouseDetailsListModule {}
