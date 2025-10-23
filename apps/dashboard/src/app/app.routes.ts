import { Route } from '@angular/router';
import { remoteRoutes } from './remote.routes';
import { Home } from './pages/home';
export const appRoutes: Route[] = [
  // Dynamic remote routes - remotes accessible via direct URLs
  ...remoteRoutes,
  {
    path: '',
    component: Home,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
