import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {providePasswordEvaluatorFn} from "./password-strenght.directive";
import {provideAnimations} from "@angular/platform-browser/animations";

export function customPasswordEvaluator(password: string) {
  if (password.length < 6) {
    return 'weak';
  } else if (password.length < 10) {
    return 'medium';
  }
  return 'strong';
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  providePasswordEvaluatorFn(customPasswordEvaluator), provideAnimations()
]
};
