import {APP_BASE_HREF, LocationStrategy, PlatformLocation, PathLocationStrategy} from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms/index';
import {enableProdMode, PLATFORM_DIRECTIVES} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { NameListService } from './shared/index';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {UIROUTER_PROVIDERS, UIRouterConfig, UIROUTER_DIRECTIVES, UiView} from 'ui-router-ng2/ng2';
import {MyUIRouterConfig} from './router.config';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
bootstrap(UiView, [
  disableDeprecatedForms(),
  provideForms(),

  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  { provide: LocationStrategy, useClass: PathLocationStrategy},
  { provide: PlatformLocation, useClass: BrowserPlatformLocation},

  ...UIROUTER_PROVIDERS,
  ...HTTP_PROVIDERS,

  NameListService,

  // Provide a custom UIRouterConfig to configure UI-Router
  { provide: UIRouterConfig, useClass: MyUIRouterConfig },

  // Make `directives: [UIROUTER_DIRECTIVES]` optional in a @Component
  // by always including them in the PLATFORM_DIRECTIVCES
  { provide: PLATFORM_DIRECTIVES, useValue: [UIROUTER_DIRECTIVES], multi: true}
]);

// In order to start the Service Worker located at "./worker.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
