import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsListModule } from '../../components/students-list/students-list.module';

@NgModule({
  imports: [CommonModule, StudentsListModule],
  declarations: [StudentsComponent],
  exports: [StudentsComponent],
})
export class StudentsModule {}
