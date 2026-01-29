import { Component, ChangeDetectionStrategy, signal, computed, inject, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { i18n } from '../../core/services/i18n.service';
import { theme, toggleTheme } from '../../core/services/theme.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage, MatIconModule, FormsModule]
})
export class PortfolioComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  public i18n = i18n;
  public theme = theme;
  public toggleTheme = toggleTheme;

  // UI State Signals
  readonly selectedCategory = signal('All');
  readonly selectedProject = signal<any | null>(null);
  readonly isDownloadingCV = signal(false);
  readonly downloadSuccess = signal(false);



  // Contact Form Signals
  readonly contactName = signal('');
  readonly contactEmail = signal('');
  readonly contactSubject = signal('');
  readonly contactMessage = signal('');

  readonly isSubmitting = signal(false);
  readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  readonly showErrors = signal(false);

  // Scroll to Top Button
  readonly showScrollTop = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTop.set(scrollPosition > 100); // Show button after 100px scroll
  }

  // Scroll to Top Function
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Scroll to Projects Section
    scrollToProjects(): void {
  const element = document.getElementById('projects');
  if (element) {
    window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  }
}

  // Validation
  readonly isEmailValid = computed(() => {
    const email = this.contactEmail();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  });

  readonly isFormValid = computed(() => {
    return this.contactName().trim() !== '' &&
           this.isEmailValid() &&
           this.contactSubject().trim() !== '' &&
           this.contactMessage().trim() !== '';
  });

  // Use computed to update signals when i18n changes
  readonly services = computed(() => {
    const list = this.i18n().portfolioServicesList;
    return [
      {
        title: list[0]?.title || 'UI/UX Design',
        description: list[0]?.description || 'Crafting intuitive and engaging user interfaces that delight users.',
        icon: 'design_services',
        image: 'assets/img/service1.png'
      },
      {
        title: list[1]?.title || 'Web Design',
        description: list[1]?.description || 'Building responsive and performant websites with modern technologies.',
        icon: 'web',
        image: 'assets/img/service2.png'
      },
      {
        title: list[2]?.title || 'Landing Pages',
        description: list[2]?.description || 'High-converting landing pages designed to capture leads and drive sales.',
        icon: 'layers',
        image: 'assets/img/service3.png'
      }
    ];
  });

  readonly experience = computed(() => {
    return this.i18n().portfolioExperienceList || [];
  });

  readonly projects = computed(() => {
    return this.i18n().portfolioProjectsList || [];
  });

  readonly categories = computed<string[]>(() => {
    const allProjects = this.projects() as any[];
    const uniqueCats = new Set<string>(allProjects.map((p: any) => p.category));
    return ['All', ...Array.from(uniqueCats)];
  });

  readonly filteredProjects = computed<any[]>(() => {
    const category = this.selectedCategory();
    const allProjects = this.projects() as any[];
    if (category === 'All') return allProjects;
    return allProjects.filter((p: any) => p.category === category);
  });

  readonly testimonials = computed(() => {
    const list = this.i18n().portfolioTestimonialsList;
    return [
      {
        name: list[0]?.name || 'Jennifer',
        role: list[0]?.role || 'Product Manager',
        image: 'assets/img/avatar1.jpg',
        quote: list[0]?.quote || 'Ahmed is a fantastic designer who truly understands user needs. Highly recommended!',
        rating: 5
      },
      {
        name: list[1]?.name || 'David',
        role: list[1]?.role || 'CEO',
        image: 'assets/img/avatar2.jpg',
        quote: list[1]?.quote || 'The new design exceeded our expectations. Our conversion rates have doubled since launch.',
        rating: 5
      }
    ];
  });

  readonly skills = computed(() => {
    return this.i18n().portfolioSkillsList;
  });

  readonly stats = signal([
    { label: 'Happy Clients', value: '450+' },
    { label: 'Project Completed', value: '450+' },
  ]);

  getSkillIcon(category: string): string {
    if (category.includes('Tech')) return 'code';
    if (category.includes('Outils') || category.includes('Tools')) return 'build';
    if (category.includes('Data') || category.includes('Données')) return 'storage';
    if (category.includes('Design')) return 'palette';
    if (category.includes('Test')) return 'speed';
    if (category.includes('Quality') || category.includes('Qualité')) return 'verified';
    if (category.includes('Lang')) return 'translate';
    return 'star';
  }

  setCategory(category: any): void {
    this.selectedCategory.set(category);
  }

  openProjectDetails(project: any): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  closeProjectDetails(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  downloadCV(): void {
  if (this.isDownloadingCV()) return;

  this.isDownloadingCV.set(true);

  const fileUrl = '/assets/CV/Cv-Ahmed-Tombari-Fullstack-Java-Angular.pdf';

  // Open PDF in a new tab to read it
  window.open(fileUrl, '_blank');

  // Trigger download programmatically
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'Cv-Ahmed-Tombari-Fullstack-Java-Angular.pdf'; // This suggests filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Finish loading states after small delay
  setTimeout(() => {
    this.isDownloadingCV.set(false);
    this.downloadSuccess.set(true);

    setTimeout(() => this.downloadSuccess.set(false), 3000);
  }, 500);
}


  submitForm(): void {
    if (!this.isFormValid()) {
      this.showErrors.set(true);
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitStatus.set('success');

      // Reset form
      this.contactName.set('');
      this.contactEmail.set('');
      this.contactSubject.set('');
      this.contactMessage.set('');
      this.showErrors.set(false);

      // Reset success message after 5 seconds
      setTimeout(() => this.submitStatus.set('idle'), 5000);
    }, 1500);
  }
}
