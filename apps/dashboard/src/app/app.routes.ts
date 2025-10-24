import { Route } from '@angular/router';
import { remoteRoutes } from './remote.routes';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
export const appRoutes: Route[] = [
  // Dynamic remote routes - remotes accessible via direct URLs
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent, // Loads at root path
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent), // Lazy loaded
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ), // Lazy loaded
      },
      ...remoteRoutes,
      {
        path: '**',
        loadComponent: () =>
          import('@hemantajax/uikit').then((m) => m.NotFoundComponent),
      },
    ],
  },
];
