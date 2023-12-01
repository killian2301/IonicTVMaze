import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { starOutline } from 'ionicons/icons';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SearchComponent } from '../../shared/components/search/search.component';
import { TvShowCardComponent } from '../../shared/components/tv-show-card/tv-show-card.component';
import { TvShow } from '../../shared/interfaces/tv-show.interface';
import { TvShowService } from '../../shared/services/tv-show.service';
import { Top10SectionComponent } from './components/top10-section/top10-section.component';
import { TvShowsByGenreSectionComponent } from './components/tv-shows-by-genre-section/tv-shows-by-genre-section.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    SearchComponent,
    Top10SectionComponent,
    TvShowsByGenreSectionComponent,
    TvShowCardComponent,
  ],
})
export class HomePage implements OnInit, OnDestroy {
  tvShows!: Observable<TvShow[]>;
  searchedShows!: Observable<TvShow[]>;
  top10TvShows!: Observable<TvShow[]>;
  searchQueryControl: FormControl = new FormControl('');
  unsubscribeSignal$ = new Subject();

  constructor(private tvShowService: TvShowService) {
    addIcons({ starOutline });
  }

  ngOnInit(): void {
    this.handleSearchSubscription();
    this.tvShows = this.tvShowService.getShows();
    this.top10TvShows = this.tvShowService.getTopShows();
  }
  handleSearchSubscription() {
    this.searchQueryControl.valueChanges
      .pipe(takeUntil(this.unsubscribeSignal$))
      .subscribe((query) => this.searchQuery(query));
  }
  searchQuery(query: string) {
    this.searchedShows = this.tvShowService.searchShows(query);
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal$.next(true);
  }
}
