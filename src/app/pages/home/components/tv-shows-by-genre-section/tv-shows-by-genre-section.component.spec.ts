import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowsByGenreSectionComponent } from './tv-shows-by-genre-section.component';

describe('TvShowsByGenreSectionComponent', () => {
  let component: TvShowsByGenreSectionComponent;
  let fixture: ComponentFixture<TvShowsByGenreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowsByGenreSectionComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsByGenreSectionComponent);
    component = fixture.componentInstance;
    component.shows = of([
      { genres: ['Crime', 'Drama'], rating: { average: 2 } },
    ] as TvShow[]);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
