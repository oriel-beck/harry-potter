import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.css'],
})
export class TeacherModalComponent {
  student!: Student;
  constructor(@Inject(MAT_DIALOG_DATA) data: { student: Student }) {
    this.student = data.student;
  }
}
