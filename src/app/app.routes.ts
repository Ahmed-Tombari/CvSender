import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/landing/landing').then(m => m.LandingComponent) },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio').then(m => m.PortfolioComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/landing/landing').then(m => m.LandingComponent) },
  { path: 'apply/success', loadComponent: () => import('./components/success/success').then(m => m.ApplySuccessComponent) },
  { path: '**', redirectTo: '' }
];
