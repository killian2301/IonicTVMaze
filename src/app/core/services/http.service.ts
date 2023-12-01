import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceInterface } from '../interfaces/http-service.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements HttpServiceInterface {
  constructor(private httpClient: HttpClient) {}

  getAll<T>(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(url);
  }
  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }
}
