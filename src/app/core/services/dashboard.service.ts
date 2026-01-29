import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs';

export interface DashboardChartSeries {
  name: string;
  data: number[];
}

export interface DashboardChartData {
  categories: string[];
  series: DashboardChartSeries[];
}

export interface DashboardSummary {
  totalFiles: number;
  totalSizeMB: number;
  filesToday: number;
  totalCVSent: number;
  cvSentToday: number;
}

export interface DashboardOutput {
  summary: DashboardSummary;
  cvSentCharts: {
    daily: DashboardChartData;
    monthly: DashboardChartData;
    yearly: DashboardChartData;
  };
}

export interface DashboardResponseItem {
  output: DashboardOutput;
}

export type DashboardResponse = DashboardResponseItem[];

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5678/webhook-test/befe49ad-61d8-4813-81a7-38a4ec01fea8';

  // State
  private state = signal<DashboardOutput | null>(null);
  
  // Public Signals
  isLoading = signal(false);

  // Computed Selectors
  summary = computed(() => this.state()?.summary);
  
  // New Chart Selectors
  dailyChart = computed(() => this.state()?.cvSentCharts?.daily);
  monthlyChart = computed(() => this.state()?.cvSentCharts?.monthly);
  yearlyChart = computed(() => this.state()?.cvSentCharts?.yearly);

  // Backwards compatibility or mapping if needed (or remove if old charts are gone)
  // For now, we update the existing components to use these new signals.
  // sizeEvolutionChart is replaced by dailyChart (or we map it if component name stays)
  sizeEvolutionChart = computed(() => this.state()?.cvSentCharts?.daily); 

  private CACHE_KEY = 'dashboard_data_v1';

  load(): void {
    // 1. Try to load from cache immediately
    const cached = sessionStorage.getItem(this.CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed) {
          console.log('[DashboardService] Loaded data from cache');
          this.state.set(parsed);
        }
      } catch (e) {
        console.warn('[DashboardService] Failed to parse cached data', e);
      }
    }

    if (this.isLoading()) return;

    this.isLoading.set(true);
    console.log('[DashboardService] Loading data from:', this.apiUrl);
    
    this.http.get<any>(this.apiUrl).pipe(
      tap(response => {
        console.log('[DashboardService] Raw response:', response);
        
        let data: DashboardOutput | null = null;

        // Handle array response (standard n8n)
        if (Array.isArray(response) && response.length > 0) {
          if (response[0].output) {
            data = response[0].output;
          } else {
             // Maybe the array item itself is the data?
             data = response[0];
          }
        } 
        // Handle direct object response (JSON mode)
        else if (response && typeof response === 'object') {
           if (response.output) {
             data = response.output;
           } else {
             data = response as DashboardOutput;
           }
        }

        if (data && data.summary) {
          console.log('[DashboardService] State updated:', data);
          this.state.set(data);
          // 2. Save to cache
          sessionStorage.setItem(this.CACHE_KEY, JSON.stringify(data));
        } else {
          console.warn('[DashboardService] Unexpected response structure. parsed data:', data);
        }
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      error: (err) => console.error('[DashboardService] HTTP Error:', err)
    });
  }
}
