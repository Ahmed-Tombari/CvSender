import { Component, inject } from '@angular/core';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
import { DashboardService } from '../../core/services/dashboard.service';
import { i18n } from '../../core/services/i18n.service';

@Component({
  selector: 'app-summary',
  imports: [StatCardComponent],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class SummaryComponent {
  private dashboardService = inject(DashboardService);
  public i18n = i18n;
  summary = this.dashboardService.summary;
  isLoading = this.dashboardService.isLoading;

  constructor() {
    this.dashboardService.load();
  }
}
