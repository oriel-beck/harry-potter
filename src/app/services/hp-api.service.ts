import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Student } from '../models/student.model';
import { filter, from, Observable, switchMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  private baseUrl = 'http://hp-api.herokuapp.com/api/characters';
  constructor(private api: ApiService) {}

  getHouseCharacters(house: string): Observable<Student[]> {
    return this.api.get<Student[]>(
      `${this.baseUrl}/house/${house.toLowerCase()}`
    );
  }

  getHouseStaff(house: string): Observable<Student[]> {
    return this.getHouseCharacters(house).pipe(
      switchMap((students) => from(students)),
      filter((student) => student.hogwartsStaff),
      toArray()
    );
  }

  getHousestudents(house: string): Observable<Student[]> {
    return this.getHouseCharacters(house).pipe(
      switchMap((students) => from(students)),
      filter((student) => student.hogwartsStudent),
      toArray()
    );
  }
}
