import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyDialogComponent } from '../apply-dialog/apply-dialog';
import { LineChartsComponent } from "../charts/line-charts/line-charts";
import { ColumenChartsComponent } from "../charts/columen-charts/columen-charts";
import { PieChartsComponent } from "../charts/pie-charts/pie-charts";
import { Map } from "../shared/map/map";
import { SummaryComponent } from "../summary/summary";
import { DashboardService } from '../../core/services/dashboard.service';
import { i18n } from '../../core/services/i18n.service';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ApplyDialogComponent, LineChartsComponent, ColumenChartsComponent, PieChartsComponent, Map, SummaryComponent, MatIconModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent {
  private router = inject(Router);
  private dashboardService = inject(DashboardService);
  public i18n = i18n;

  modalOpen = signal(false);

  readonly showScrollTop = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTop.set(scrollPosition > 100); // Show button after 100px scroll
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() {
    this.dashboardService.load();
  }

  openApply(): void {
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  closeApply(): void {
    this.modalOpen.set(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}
