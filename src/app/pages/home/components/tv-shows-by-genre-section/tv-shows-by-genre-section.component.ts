import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/enums/tv-show.enums';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowsGenreListComponent } from './components/tv-shows-genre-list/tv-shows-genre-list.component';

@Component({
  selector: 'app-tv-shows-by-genre-section',
  templateUrl: './tv-shows-by-genre-section.component.html',
  styleUrls: ['./tv-shows-by-genre-section.component.scss'],
  standalone: true,
  imports: [CommonModule, TvShowsGenreListComponent],
})
export class TvShowsByGenreSectionComponent {
  @Input() shows!: Observable<TvShow[]>;
  genres: Genre[] = [Genre.Drama, Genre.Comedy, Genre.Crime, Genre.Sports];
  constructor() {}
}
