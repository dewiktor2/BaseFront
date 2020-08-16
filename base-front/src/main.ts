import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setAppInjector } from 'app/helpers/app-injector';

if (environment.production) {
  enableProdMode();
}

let platform = platformBrowserDynamic();

setAppInjector(platform.injector);

platform.bootstrapModule(AppModule).catch(err => console.error(err));
