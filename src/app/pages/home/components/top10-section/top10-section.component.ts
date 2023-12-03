import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowListComponent } from '../../../../shared/components/tv-show-list/tv-show-list.component';

@Component({
  selector: 'app-top10-section',
  templateUrl: './top10-section.component.html',
  styleUrls: ['./top10-section.component.scss'],
  standalone: true,
  imports: [TvShowListComponent],
})
export class Top10SectionComponent {
  @Input() shows!: Observable<TvShow[]>;
}
