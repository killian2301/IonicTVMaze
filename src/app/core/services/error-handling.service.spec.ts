import { TestBed } from '@angular/core/testing';
import { ErrorHandlingService } from './error-handling.service';

describe('ErrorHandlingService', () => {
  let service: ErrorHandlingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [ErrorHandlingService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ErrorHandlingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
