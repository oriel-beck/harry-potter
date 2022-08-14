import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { House } from '../models/house.model';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WizardWorldService {
  private baseUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private api: ApiService) {}

  getHouses(): Observable<House[]> {
    return this.api.get<House[]>(`${this.baseUrl}/Houses`);
  }
}
