import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/module-federation.manifest.json')
  .then((res) => res.json())
  .then(setRemoteDefinitions)
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
