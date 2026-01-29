import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/landing/landing').then(m => m.LandingComponent) },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio').then(m => m.PortfolioComponent) },
  { path: 'apply/success', loadComponent: () => import('./components/success/success').then(m => m.ApplySuccessComponent) },
  { path: 'test4', loadComponent: () => import('./components/test4/test4').then(m => m.Test4) },
  { path: '**', redirectTo: '' }
];
