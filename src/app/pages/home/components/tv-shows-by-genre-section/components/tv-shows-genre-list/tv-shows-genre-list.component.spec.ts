import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowsGenreListComponent } from './tv-shows-genre-list.component';

describe('TvShowsGenreListComponent', () => {
  let component: TvShowsGenreListComponent;
  let fixture: ComponentFixture<TvShowsGenreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowsGenreListComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsGenreListComponent);
    component = fixture.componentInstance;
    component.shows = of([
      { genres: ['Crime', 'Drama'], rating: { average: 2 } },
    ] as TvShow[]);
    component.genre = 'Drama';
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
