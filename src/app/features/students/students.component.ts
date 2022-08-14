import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HpApiService } from '../../services/hp-api.service';
import { map, Observable, switchMap } from 'rxjs';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  staff$?: Observable<Student[]>;
  students$?: Observable<Student[]>;
  constructor(
    private router: ActivatedRoute,
    private HpApiService: HpApiService
  ) {
    this.staff$ = this.router.paramMap.pipe(
      map((map) => map.get('house')!),
      switchMap((house) => this.HpApiService.getHouseStaff(house))
    );

    this.students$ = this.router.paramMap.pipe(
      map((map) => map.get('house')!),
      switchMap((house) => this.HpApiService.getHousestudents(house))
    );
  }

  ngOnInit(): void {}
}
