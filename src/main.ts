import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
      console.log('Passing control to browser app');
     platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
   });
