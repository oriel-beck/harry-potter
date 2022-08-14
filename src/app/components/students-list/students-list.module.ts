import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { MatListModule } from '@angular/material/list';
import { SubHeaderModule } from '../sub-header/sub-header.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TeacherModalModule } from '../teacher-modal/teacher-modal.module';

@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    MatListModule,
    SubHeaderModule,
    MatDialogModule,
    TeacherModalModule,
  ],
  exports: [StudentsListComponent],
})
export class StudentsListModule {}
