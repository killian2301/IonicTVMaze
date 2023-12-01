import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { TvShow } from 'src/app/shared/interfaces/tv-show.interface';
import { LazyImageComponent } from '../lazy-image/lazy-image.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonCard,
    IonIcon,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSkeletonText,
    CommonModule,
    LazyImageComponent,
    RatingComponent,
  ],
})
export class TvShowCardComponent {
  @Input() show!: TvShow;
  @Input() imageHeight: string = '100%';

  constructor(private router: Router) {
    addIcons({ star });
  }
  onOpenDetails() {
    this.router.navigate(['shows', this.show.id]);
  }
}
