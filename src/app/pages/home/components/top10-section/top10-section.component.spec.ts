import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { Top10SectionComponent } from './top10-section.component';

describe('Top10SectionComponent', () => {
  let component: Top10SectionComponent;
  let fixture: ComponentFixture<Top10SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10SectionComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10SectionComponent);
    component = fixture.componentInstance;
    component.shows = of([
      { genres: ['Crime', 'Drama'], rating: { average: 2 } },
    ] as TvShow[]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
