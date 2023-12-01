import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { HttpServiceInterface } from 'src/app/core/interfaces/http-service.interface';
import { ErrorHandlingService } from 'src/app/core/services/error-handling.service';
import { HttpService } from '../../core/services/http.service';
import { ShowSearchResult, TvShow } from '../interfaces/tv-show.interface';
import { HTTP_SERVICE_TOKEN, TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvShowService;
  let httpService: HttpServiceInterface;
  let errorHandlingService: ErrorHandlingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TvShowService,
        {
          provide: HTTP_SERVICE_TOKEN,
          useClass: HttpService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    httpService = TestBed.inject(HTTP_SERVICE_TOKEN);
    errorHandlingService = jest.fn() as unknown as ErrorHandlingService;
    service = TestBed.inject(TvShowService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getShowById', () => {
    it('should handle error', async () => {
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => 'Error'));

      try {
        await firstValueFrom(service.getShowById('1'));
      } catch (error) {
        expect(error).toEqual('Error Code: undefined\nMessage: undefined');
      }
    });

    it('should handle null show', async () => {
      jest.spyOn(httpService, 'get').mockReturnValue(of(null));

      const show = await firstValueFrom(service.getShowById('1'));
      expect(show).toBeNull();
    });

    it('should get show', async () => {
      const mockShow = {
        id: 1,
        name: 'Show 1',
        rating: { average: 8 },
      } as TvShow;
      jest.spyOn(httpService, 'get').mockReturnValue(of(mockShow));

      const show = await firstValueFrom(service.getShowById('1')); // use firstValueFrom with await

      expect(show).toEqual(mockShow);
    });
  });

  describe('getShows', () => {
    it('should handle no shows', () => {
      jest.spyOn(httpService, 'getAll').mockReturnValue(of([]));

      service.getShows().subscribe((shows) => {
        expect(shows).toEqual([]);
      });
    });
  });

  describe('getTopShows', () => {
    it('should get top shows', () => {
      const mockShows = [
        {
          id: 1,
          name: 'Show 1',
          rating: { average: 8 },
        },
      ] as TvShow[];

      jest.spyOn(service, 'getShows').mockReturnValue(of(mockShows));

      service.getTopShows().subscribe((shows) => {
        expect(shows).toEqual(mockShows.slice(0, 10));
      });
    });

    it('should return shows in correct order', () => {
      const mockShows = [
        { id: 1, name: 'Show 1', rating: { average: 7 } },
        { id: 2, name: 'Show 2', rating: { average: 9 } },
        { id: 3, name: 'Show 3', rating: { average: 8 } },
      ] as TvShow[];
      jest.spyOn(service, 'getShows').mockReturnValue(of(mockShows));

      service.getTopShows().subscribe((shows) => {
        expect(shows).toEqual([
          { id: 2, name: 'Show 2', rating: { average: 9 } },
          { id: 3, name: 'Show 3', rating: { average: 8 } },
          { id: 1, name: 'Show 1', rating: { average: 7 } },
        ]);
      });
    });
  });

  describe('searchShows', () => {
    it('should search shows', () => {
      const mockQuery = 'query';
      const mockShow = {
        id: 1,
        name: 'Show 1',
        rating: { average: 8 },
      } as TvShow;
      const mockResults: ShowSearchResult[] = [
        {
          show: mockShow,
          score: 9,
        },
      ];
      jest.spyOn(httpService, 'getAll').mockReturnValue(of(mockResults));

      service.searchShows(mockQuery).subscribe((shows) => {
        expect(shows).toEqual(mockResults.map((result) => result.show));
      });
    });

    it('should return empty array if no query', () => {
      const spy = jest.spyOn(httpService, 'getAll');
      service.searchShows('').subscribe((shows) => {
        expect(shows).toEqual([]);
        expect(spy).not.toHaveBeenCalled();
      });
    });
  });
});
