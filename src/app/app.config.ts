import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de que `app.routes` esté correctamente definido

export const appConfig = [
  provideHttpClient(),
  provideRouter(routes),
];
