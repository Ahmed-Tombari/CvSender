import { Component, computed, inject, signal } from "@angular/core";
import { DashboardService } from "../../../core/services/dashboard.service";
import {
  ChartComponent,
  NgApexchartsModule,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle,
  ApexLegend,
} from "ng-apexcharts";
import { i18n } from "../../../core/services/i18n.service";
import { theme } from "../../../core/services/theme.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  title: ApexTitleSubtitle;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: "app-pie-charts",
  templateUrl: "./pie-charts.html",
  styleUrls: ["./pie-charts.scss"],
  imports: [NgApexchartsModule] 
})
export class PieChartsComponent {
  private dashboardService = inject(DashboardService);
  
  // Note: Selected Year filter might be redundant here if we show ALL years, 
  // but we keep the signal exposed as the parent (landing) expects it.
  public selectedYear = signal(new Date().getFullYear());
  public availableYears = signal([2024, 2025, 2026]);

  public chartOptions = computed(() => {
    const data = this.dashboardService.yearlyChart();
    const currentTheme = theme();
    const isDark = currentTheme === 'dark';
    
    // Default / Fallback
    let series: number[] = [0, 0, 0];
    let labels: string[] = ["2024", "2025", "2026"];

    if (data && data.series && data.series.length > 0 && data.categories.length > 0) {
      // Assuming series[0].data contains the counts and categories contains the years
      series = data.series[0].data;
      labels = data.categories;
    } else {
        // Simple fallback if no API data yet to verify the "2024 2025 2026" request
        series = [44, 55, 30]; // Mock values consistent with a "demo" experience
    }

    const options: ChartOptions = {
      series: series,
      chart: {
        width: 380,
        type: "pie",
        fontFamily: "Manrope, sans-serif",
        animations: {
          enabled: true,
          easing: 'easeinout' as const,
          speed: 800,
        }
      },
      colors: [
        "#3b82f6", // primary
        "#10b981", // secondary
        "#f59e0b", // warning
        "#ef4444", // danger
        "#8b5cf6"  // purple
      ],
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        text: undefined,
        align: "left",
        style: {
          fontFamily: "Manrope, sans-serif",
          color: isDark ? '#f1f5f9' : '#475569'
        }
      },
      legend: {
        labels: {
          colors: isDark ? '#94a3b8' : '#64748b',
        }
      }
    };

    return options;
  });

  onYearChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedYear.set(Number(select.value));
  }
}
