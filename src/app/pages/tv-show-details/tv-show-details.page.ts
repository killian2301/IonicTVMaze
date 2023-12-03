import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Subject, take } from 'rxjs';
import { LazyImageComponent } from 'src/app/shared/components/lazy-image/lazy-image.component';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { TvShowService } from 'src/app/shared/services/tv-show.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.page.html',
  styleUrls: ['./tv-show-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonContent,
    IonImg,
    IonTitle,
    RatingComponent,
    LazyImageComponent,
  ],
})
export class TvShowDetailsPage implements OnInit, OnDestroy {
  show?: TvShow | null;
  unsubscribeSignal$ = new Subject();

  constructor(
    private tvShowService: TvShowService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.tvShowService
        .getShowById(id)
        .pipe(take(1))
        .subscribe((show) => (this.show = show));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal$.next(true);
  }
}
