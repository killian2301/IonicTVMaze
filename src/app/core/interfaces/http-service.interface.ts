import { Observable } from 'rxjs';

export interface HttpServiceInterface {
  get<T>(url: string): Observable<T>;
  getAll<T>(url: string): Observable<T[]>;
}
