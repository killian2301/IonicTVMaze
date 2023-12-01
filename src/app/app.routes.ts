import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'shows/:id',
    loadComponent: () =>
      import('./pages/tv-show-details/tv-show-details.page').then(
        (m) => m.TvShowDetailsPage
      ),
  },
];
