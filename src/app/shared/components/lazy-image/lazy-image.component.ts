import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonImg, IonSpinner } from '@ionic/angular/standalone';

export const NO_IMAGE_PLACEHOLDER: string =
  'assets/images/no_image_placeholder.png';
@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
  standalone: true,
  imports: [CommonModule, IonImg, IonSpinner],
})
export class LazyImageComponent implements OnInit {
  @Input() src?: string;
  @Input() height!: string;
  @ViewChild('image', { static: false }) imageRef!: IonImg;

  isLoading = true;

  constructor() {}
  ngOnInit(): void {
    if (!this.src) this.src = NO_IMAGE_PLACEHOLDER;
  }

  onImageLoaded(): void {
    this.isLoading = false;
  }

  onErrorLoad(): void {
    this.imageRef.src = NO_IMAGE_PLACEHOLDER;
  }
}
