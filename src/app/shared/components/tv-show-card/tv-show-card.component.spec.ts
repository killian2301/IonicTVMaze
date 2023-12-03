import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Genre } from '../../enums/tv-show.enums';
import { TvShow } from '../../interfaces/tv-show.interface';
import { TvShowCardComponent } from './tv-show-card.component';

describe('TvShowCardComponent', () => {
  let component: TvShowCardComponent;
  let fixture: ComponentFixture<TvShowCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowCardComponent],
      providers: [{ provide: Router, useValue: { navigate: jest.fn() } }],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCardComponent);
    component = fixture.componentInstance;
    component.show = {
      id: 12,
      genres: [Genre.Crime, Genre.Drama],
      rating: { average: 2 },
    } as TvShow;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to correct route on open details', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.onOpenDetails();
    expect(navigateSpy).toHaveBeenCalledWith(['shows', component.show.id]);
  });
});
