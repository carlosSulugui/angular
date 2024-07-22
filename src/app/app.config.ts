import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {FormsModule} from "@angular/forms";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {getMatAutocompleteMissingPanelError} from "@angular/material/autocomplete";
import {errorHandlerInterceptor} from "./core/iterceptos/error-handler.interceptor";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
    withFetch(),
    withInterceptors([
      // errorHandlerInterceptor,
      errorHandlerInterceptor
    ])),
    provideRouter(routes),
    provideAnimationsAsync(),
  ]
};
