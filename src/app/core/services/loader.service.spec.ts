import { TestBed } from '@angular/core/testing';

import { firstValueFrom } from 'rxjs';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show loader', async () => {
    service.show();
    const isLoading = await firstValueFrom(service.isLoading$);
    expect(isLoading).toBeTruthy();
  });

  it('should hide loader', async () => {
    service.hide();
    const isLoading = await firstValueFrom(service.isLoading$);
    expect(isLoading).toBeFalsy();
  });
});
