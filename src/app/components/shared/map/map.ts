import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  effect
} from '@angular/core';
import { theme } from '../../../core/services/theme.service';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

declare const google: unknown;

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CdkDrag]
})
export class Map implements AfterViewInit {

  private readonly loaded = signal(false);
  
  // Zoom state
  readonly zoomLevel = signal(1);
  readonly MIN_ZOOM = 1;
  readonly MAX_ZOOM = 5;
  readonly ZOOM_STEP = 0.5;

  readonly status = computed(() =>
    this.loaded() ? 'Chart ready' : 'Loading chart…'
  );

  // Computed transform style for the map container
  readonly mapTransform = computed(() => `scale(${this.zoomLevel()})`);
  
  // Enable drag only when zoomed in
  readonly isDraggable = computed(() => this.zoomLevel() > 1);

  constructor() {
    // Redraw map when theme changes
    effect(() => {
      const currentTheme = theme();
      if (this.loaded()) {
        this.drawChart();
      }
    });
  }

  ngAfterViewInit(): void {
    this.loadGoogleScript().then(() => {
      // @ts-expect-error google type global
      google.charts.load('current', { packages: ['geochart'] });
      // @ts-expect-error google type global
      google.charts.setOnLoadCallback(() => {
        this.loaded.set(true);
        this.drawChart();
      });
    });
  }

  zoomIn(): void {
    this.zoomLevel.update(z => Math.min(z + this.ZOOM_STEP, this.MAX_ZOOM));
  }

  zoomOut(): void {
    this.zoomLevel.update(z => Math.max(z - this.ZOOM_STEP, this.MIN_ZOOM));
  }

  resetZoom(): void {
    this.zoomLevel.set(1);
  }

  onWheel(event: WheelEvent): void {
    if (event.ctrlKey) {
      event.preventDefault();
      if (event.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    }
  }

  private loadGoogleScript(): Promise<void> {
    return new Promise((resolve) => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.gstatic.com/charts/loader.js"]'
      );

      if (existing) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  private drawChart(): void {
    // @ts-expect-error google type global
    const data = google.visualization.arrayToDataTable([
      ['Country', 'Orders'],
      ['United States', 520],
      ['France', 200],
      ['Germany', 180],
      ['Brazil', 130],
      ['Canada', 95],
      ['Saudi Arabia', 75]
    ]);

    const isDark = theme() === 'dark';
    
    const options = {
      colorAxis: { colors: isDark ? ['#3b82f6', '#60a5fa'] : ['#93c5fd', '#2563eb'] },
      backgroundColor: 'transparent',
      datalessRegionColor: isDark ? '#1e293b' : '#f1f5f9', // slate-800 : slate-100
      defaultColor: '#3b82f6',
      legend: 'none',
      tooltip: { 
        trigger: 'focus', 
        isHtml: true,
        textStyle: {
          color: isDark ? '#f1f5f9' : '#1e293b'
        }
      }
    };

    // @ts-expect-error google type global
    const chart = new google.visualization.GeoChart(
      document.getElementById('regionsMap')
    );

    chart.draw(data, options);
  }
}
