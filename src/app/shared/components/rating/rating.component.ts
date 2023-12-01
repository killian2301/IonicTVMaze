import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class RatingComponent {
  @Input() rating!: number;
  constructor() {
    addIcons({ star });
  }
}
