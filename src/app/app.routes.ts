import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'boards',
    loadComponent: () => import('./components/board/board-layout/board-layout').then(c => c.BoardLayout)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
