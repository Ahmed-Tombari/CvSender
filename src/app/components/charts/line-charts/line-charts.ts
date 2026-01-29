import { Component, computed, inject, signal } from "@angular/core";
import { DashboardService } from "../../../core/services/dashboard.service";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";
import { i18n, lang } from "../../../core/services/i18n.service"; // ✅ lang comes from i18n.service
import { theme } from "../../../core/services/theme.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  colors: string[];
};

@Component({
  selector: "app-line-charts",
  templateUrl: "./line-charts.html",
  styleUrls: ["./line-charts.scss"],
  imports: [NgApexchartsModule]
})
export class LineChartsComponent {
  private dashboardService = inject(DashboardService);

  // State for filter
  public selectedYear = signal(new Date().getFullYear());
  public availableYears = signal([2024, 2025, 2026]);

  // Helper to get locale based on language
  private getLocale(lang: string): string {
    switch (lang) {
      case 'fr': return 'fr-FR';
      case 'ar': return 'ar-EG'; // or ar-SA if preferred
      default: return 'en-US';
    }
  }

  // Create a computed signal for chart options to ensure reactivity
  public chartOptions = computed(() => {
    const data = this.dashboardService.monthlyChart();
    const currentLang = lang(); // ✅ Correct source for language
    const translations = i18n(); // For text if needed
    const currentTheme = theme();
    const year = this.selectedYear();

    const locale = this.getLocale(currentLang);

    const isDark = currentTheme === 'dark';
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? '#1e293b' : '#f1f5f9';

    // Default options
    const options: ChartOptions = {
      series: [
        {
          name: translations?.cvSent || "CV Sent",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line",
        fontFamily: "Manrope, sans-serif",
        zoom: { enabled: false },
        toolbar: { show: false },
        dropShadow: {
          enabled: true,
          color: '#6999BE',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
        }
      },
      colors: ["#6999BE"],
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: 4
      },
      title: {
        text: undefined,
        align: "left",
        style: {
          fontFamily: "Manrope, sans-serif",
          color: isDark ? '#f1f5f9' : '#475569'
        }
      },
      grid: {
        borderColor: gridColor,
        strokeDashArray: 4,
        row: {
          colors: ["transparent", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: textColor,
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      }
    };

    // Generate localized months
    const months: string[] = [];
    for (let i = 0; i < 12; i++) {
      const d = new Date(year, i, 1);
      months.push(
        new Intl.DateTimeFormat(locale, { month: 'short' }).format(d)
      );
    }
    options.xaxis.categories = months;

    // Initialize data with 0 for all 12 months
    const yearData = new Array(12).fill(0);

    if (data?.categories?.length && data?.series?.length) {
      const incomingData = data.series[0].data;

      data.categories.forEach((catDate: string, index: number) => {
        const date = new Date(catDate);
        if (!isNaN(date.getTime()) && date.getFullYear() === year) {
          const monthIndex = date.getMonth();
          yearData[monthIndex] += incomingData[index];
        }
      });
    }

    options.series = [{
      name: data?.series?.[0]?.name || translations?.cvSent || "CV Sent",
      data: yearData
    }];

    return options;
  });

  onYearChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedYear.set(Number(select.value));
  }
}
