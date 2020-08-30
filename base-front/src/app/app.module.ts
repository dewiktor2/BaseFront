import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { ToastState } from '@common/state/toast/toast.state';
import { RouterState } from '@common/state/router/router.state';
import { LayoutState } from '@common/state/layout/layout.state';
import { AppConfigService } from '@core/services/app-config/app-config.service';
import { ConfigState } from '@common/state/config/config.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

const angularModules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AppRoutingModule,
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
];

const i18Module = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
]

export const BASE_URL = new InjectionToken<string>('BaseUrl');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...angularModules,
    ...i18Module,
    CoreModule,
    [NgxsModule.forRoot([ToastState, RouterState, LayoutState, ConfigState],
      { developmentMode: !environment.production })],
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseHref },
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadInitConfig,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.baseHref}/assets/i18n/`, ".json");
}

export function loadInitConfig(appConfigService: AppConfigService) {
  return () => appConfigService.initAppConfig().subscribe();
}
