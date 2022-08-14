import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModalComponent } from './teacher-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  declarations: [TeacherModalComponent],
  exports: [TeacherModalComponent],
})
export class TeacherModalModule {}
