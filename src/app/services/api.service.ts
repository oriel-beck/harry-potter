import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';

function handler<T>(obv: Observable<T>): Observable<T> {
  return obv.pipe(
    retry(3),
    catchError((err) => {
      throw new Error(`Error in HTTP request: ${err.toString()}`);
    })
  );
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  get<T>(url: string, params = {}, headers = {}): Observable<T> {
    return handler<T>(this.http.get<T>(url, { params, headers }));
  }
}
