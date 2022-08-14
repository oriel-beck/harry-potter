import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './sub-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SubHeaderComponent],
  exports: [SubHeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
})
export class SubHeaderModule {}
