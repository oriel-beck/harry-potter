import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { TeacherModalComponent } from '../teacher-modal/teacher-modal.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent {
  @Input() students: Student[] = [];
  @Input() staff: Student[] = [];
  @Input() house: string = '';

  constructor(private dialog: MatDialog) {}

  openDialog(student: Student) {
    this.dialog.open(TeacherModalComponent, {
      data: { student },
      width: '400px',
    });
  }
}
