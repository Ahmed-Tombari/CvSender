import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCardComponent {
  @Input() title = '';
  @Input() mainMetricValue = '';
  @Input() secondaryMetricLabel = '';
  @Input() secondaryMetricValue = '';
  @Input() period = '';
  @Input() color: 'blue' | 'green' | 'orange' | 'pink' = 'blue';
  @Input() icon = 'shopping_cart';
  @Input() isLoading = false;

  /** Return Tailwind gradient classes for the icon background */
  getGradientClass(): string {
    switch (this.color) {
      case 'blue':
        return 'bg-gradient-primary shadow-glow-primary';
      case 'green':
        return 'bg-gradient-secondary shadow-glow-secondary';
      case 'orange':
        return 'bg-gradient-warning shadow-glow-warning';
      case 'pink':
        return 'bg-gradient-danger shadow-glow-danger';
      default:
        return 'bg-slate-500';
    }
  }
  
  getTextColorClass(): string {
      switch (this.color) {
      case 'blue':
        return 'text-primary-DEFAULT';
      case 'green':
        return 'text-secondary-DEFAULT';
      case 'orange':
        return 'text-warning-DEFAULT';
      case 'pink':
        return 'text-danger-DEFAULT';
      default:
        return 'text-slate-500';
    }
  }
}
