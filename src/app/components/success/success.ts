import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-success',
  standalone: true,
  templateUrl: './success.html',
  styleUrls: ['./success.scss']
})
export class ApplySuccessComponent {
  private router = inject(Router);
  backHome() { this.router.navigate(['/']); }
}
