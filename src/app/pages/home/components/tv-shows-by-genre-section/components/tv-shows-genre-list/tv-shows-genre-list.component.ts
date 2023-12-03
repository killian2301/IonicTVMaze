import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowListComponent } from '../../../../../../shared/components/tv-show-list/tv-show-list.component';

@Component({
  selector: 'app-tv-shows-genre-list',
  templateUrl: './tv-shows-genre-list.component.html',
  styleUrls: ['./tv-shows-genre-list.component.scss'],
  standalone: true,
  imports: [TvShowListComponent, AsyncPipe],
})
export class TvShowsGenreListComponent implements OnInit {
  @Input() genre!: string;
  @Input() shows!: Observable<TvShow[]>;
  filteredShowsByGenre!: Observable<TvShow[]>;
  ngOnInit(): void {
    this.filteredShowsByGenre = this.shows.pipe(
      map((shows) => shows.filter((show) => show.genres.includes(this.genre)))
    );
  }
}
