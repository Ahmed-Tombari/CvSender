import { Component, computed, inject, signal } from "@angular/core";
import { DashboardService } from "../../../core/services/dashboard.service";
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";
import { i18n, lang } from "../../../core/services/i18n.service"; // ✅ fixed import
import { theme } from "../../../core/services/theme.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-columen-charts",
  templateUrl: "./columen-charts.html",
  styleUrls: ["./columen-charts.scss"],
  imports: [NgApexchartsModule]
})
export class ColumenChartsComponent {
  private dashboardService = inject(DashboardService);

  // State for filter
  public selectedYear = signal(new Date().getFullYear());
  public availableYears = signal([2024, 2025, 2026]);

  // Helper to get locale
  private getLocale(lang: string): string {
    switch (lang) {
      case 'fr': return 'fr-FR';
      case 'ar': return 'ar-EG'; // or ar-SA
      default: return 'en-US';
    }
  }

  // Create a computed signal for chart options
  public chartOptions = computed(() => {
    const data = this.dashboardService.dailyChart();
    const currentLang = lang(); // ✅ correct source
    const translations = i18n();
    const currentTheme = theme();
    const year = this.selectedYear();

    const locale = this.getLocale(currentLang);

    const isDark = currentTheme === 'dark';
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? '#1e293b' : '#f1f5f9';

    const options: ChartOptions = {
      series: [
        {
          name: translations?.cvSent || "CV Sent",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        fontFamily: "Manrope, sans-serif",
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
        }
      },
      colors: [
        "#3b82f6", "#10b981", "#f59e0b", "#ef4444",
        "#8b5cf6", "#06b6d4", "#ec4899", "#6366f1"
      ],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
          borderRadius: 8,
          borderRadiusApplication: 'end',
        }
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      grid: {
        show: true,
        borderColor: gridColor,
        strokeDashArray: 4,
      },
      title: {
        text: undefined,
        align: "left",
        style: {
          fontFamily: "Manrope, sans-serif",
          color: isDark ? '#f1f5f9' : '#475569'
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: textColor,
            fontFamily: "Manrope, sans-serif",
          }
        }
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: textColor,
            fontSize: "12px",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      }
    };

    // Generate localized week labels (Mon → Sun)
    const days: string[] = [];
    const baseMonday = new Date(2024, 0, 1); // Monday

    for (let i = 0; i < 7; i++) {
      const d = new Date(baseMonday);
      d.setDate(baseMonday.getDate() + i);
      days.push(
        new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d)
      );
    }

    options.xaxis.categories = days;

    // Initialize data with 0 for all 7 days
    const weekData = new Array(7).fill(0);

    if (data?.categories?.length && data?.series?.length) {
      const incomingData = data.series[0].data;

      data.categories.forEach((catDate: string, index: number) => {
        const date = new Date(catDate);
        if (!isNaN(date.getTime()) && date.getFullYear() === year) {
          let dayIndex = date.getDay() - 1; // Sun=0 → -1
          if (dayIndex === -1) dayIndex = 6; // Sunday → last
          weekData[dayIndex] += incomingData[index];
        }
      });
    }

    options.series = [{
      name: data?.series?.[0]?.name || translations?.cvSent || "CV Sent",
      data: weekData
    }];

    return options;
  });

  onYearChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedYear.set(Number(select.value));
  }
}
