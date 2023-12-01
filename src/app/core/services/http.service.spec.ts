import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
  it('should perform GET request', () => {
    const mockData = { data: 'mock data' };
    const httpMock = TestBed.inject(HttpTestingController);
    service.get('url').subscribe((data) => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne('url');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  afterEach(() => {
    const httpMock = TestBed.inject(HttpTestingController);
    httpMock.verify();
  });
});
