import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpServiceInterface } from '../../core/interfaces/http-service.interface';
import { ErrorHandlingService } from '../../core/services/error-handling.service';
import { ShowSearchResult, TvShow } from '../interfaces/tv-show.interface';

export const HTTP_SERVICE_TOKEN = new InjectionToken<HttpServiceInterface>(
  'HTTP_SERVICE_TOKEN'
);

const TOP_10_NUMBER = 10;

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  constructor(
    @Inject(HTTP_SERVICE_TOKEN) private httpService: HttpServiceInterface,
    private errorHandlingService: ErrorHandlingService
  ) {}

  getShows(): Observable<TvShow[]> {
    const url = `${environment.baseAPIUrl}/shows?page=1`;
    return this.httpService
      .getAll<TvShow>(url)
      .pipe(catchError(this.errorHandlingService.handleError));
  }

  getShowById(id: string): Observable<TvShow> {
    const url = `${environment.baseAPIUrl}/shows/${id}`;
    return this.httpService
      .get<TvShow>(url)
      .pipe(catchError(this.errorHandlingService.handleError));
  }

  getTopShows(): Observable<TvShow[]> {
    return this.getShows().pipe(
      map((shows) => this.sortAndSliceShows(shows)),
      catchError(this.errorHandlingService.handleError)
    );
  }
  private sortAndSliceShows(shows: TvShow[]): TvShow[] {
    return shows
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, TOP_10_NUMBER);
  }

  searchShows(query: string): Observable<TvShow[]> {
    if (!query) {
      return of([]);
    }
    const url = `${environment.baseAPIUrl}/search/shows?q=${query}`;
    return this.httpService.getAll<ShowSearchResult>(url).pipe(
      map((results) => results.map((result) => result.show)),
      catchError(this.errorHandlingService.handleError)
    );
  }
}
