import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

/**
 * Dynamic routes for remote micro-frontends
 * Uses Nx's loadRemoteModule for seamless dynamic loading
 */
export const remoteRoutes: Route[] = [
  {
    path: 'messages',
    loadChildren: () =>
      loadRemoteModule('messages', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule('products', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule('cart', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule('profile', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'orders',
    loadChildren: () =>
      loadRemoteModule('orders', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      loadRemoteModule('analytics', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      loadRemoteModule('notifications', './Routes').then((m) => m.remoteRoutes),
  },
];
