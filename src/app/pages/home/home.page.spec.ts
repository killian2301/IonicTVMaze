import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../../core/services/http.service';

import { By } from '@angular/platform-browser';
import { HTTP_SERVICE_TOKEN } from '../../shared/services/tv-show.service';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage, HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_SERVICE_TOKEN,
          useClass: HttpService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search tv shows', () => {
    const searchQuery = 'Friends';
    component.searchQueryControl.setValue(searchQuery);
    fixture.detectChanges();
    expect(component.searchedShows).toBeTruthy();
  });

  it('should show not found text if no results found', () => {
    const searchQuery = 'NonExistentShow';
    component.searchQueryControl.setValue(searchQuery);
    fixture.detectChanges();
    const noResultsElement = fixture.debugElement.query(
      By.css('.search-results__no-results-container p')
    );
    expect(noResultsElement.nativeElement.textContent).toContain(
      'No results found.'
    );
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = jest.spyOn(component.unsubscribeSignal$, 'next');

    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
