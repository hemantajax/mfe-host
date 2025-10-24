import { Route } from '@angular/router';
import { remoteRoutes } from './remote.routes';
import { Home } from './pages/home';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
export const appRoutes: Route[] = [
  // Dynamic remote routes - remotes accessible via direct URLs
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: Home, // Loads at root path
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
