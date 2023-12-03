import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowCardComponent } from '../tv-show-card/tv-show-card.component';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss'],
  standalone: true,
  imports: [CommonModule, TvShowCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TvShowListComponent {
  @Input() shows!: Observable<TvShow[]>;
  @Input() showIndex: boolean = false;

  breakpoints = {
    320: {
      slidesPerView: 2.5,
    },
    480: {
      slidesPerView: 3.5,
    },
    640: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 5.5,
    },
    1200: {
      slidesPerView: 7.5,
    },
  };
}
