import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { LoaderService } from './core/services/loader.service';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    HttpClientModule,
    IonSpinner,
    CommonModule,
  ],
})
export class AppComponent {
  isLoading$ = this.loaderService.isLoading$;
  constructor(private loaderService: LoaderService) {}
}
