import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideAnimationsAsync(),
 provideToastr({
  timeOut: 4000,              // Slightly shorter - 5s can feel long
  positionClass: 'toast-top-center',
  preventDuplicates: true,
  progressBar: true,
  closeButton: true,
  newestOnTop: true,
  maxOpened: 3,               // Reduced from 5 - less clutter
  enableHtml: true,
  progressAnimation: 'decreasing',  // Smoother progress bar
  easeTime: 300,              // Matches your CSS animation
  tapToDismiss: true,         // Click to dismiss
  toastClass: 'ngx-toastr',   // Ensure consistent styling
}),
  ],
};
