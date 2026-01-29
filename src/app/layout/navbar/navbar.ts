import { Component, computed, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyDialogComponent } from '../../components/apply-dialog/apply-dialog';
import { i18n, setLang, LanguageCode } from '../../core/services/i18n.service';
import { theme, toggleTheme } from '../../core/services/theme.service';
import { MatIconModule } from '@angular/material/icon';

type Lang = 'English' | 'French' | 'Arabic';

interface LangOption {
  code: Lang;
  label: string;
  flag: string;
}

interface SearchResult {
  id: number;
  title: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [CommonModule, ApplyDialogComponent, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public theme = theme;
  public toggleTheme = toggleTheme;
  public isScrolled = signal(false);
  
  // Language State
  langOpen = signal(false);
  
  languages: LangOption[] = [
    { code: 'English', label: '', flag: 'fi fi-gb' },
    { code: 'French', label: '', flag: 'fi fi-fr' },
    { code: 'Arabic', label: '', flag: 'fi fi-sa' }
  ];

  selectedLang = signal<Lang>('English');
  public i18n = i18n;

  constructor() {
    this.selectedLang.set(this.detectLanguage());
    this.applyLanguage(this.selectedLang());
  }

  detectLanguage(): Lang {
    const nav = (navigator.language || navigator.languages?.[0] || 'en').toLowerCase();
    if (nav.startsWith('fr')) return 'French';
    if (nav.startsWith('ar')) return 'Arabic';
    return 'English';
  }

  toggleLang(): void {
    this.langOpen.update(v => !v);
  }

  selectLanguage(lang: Lang): void {
    this.selectedLang.set(lang);
    this.applyLanguage(lang);
    this.langOpen.set(false);
  }

  getSelectedLangOption() {
    return this.languages.find(l => l.code === this.selectedLang())!;
  }

  applyLanguage(lang: Lang): void {
     let code: LanguageCode = 'en';
     if (lang === 'French') code = 'fr';
     if (lang === 'Arabic') code = 'ar';
     
     setLang(code);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  private router = inject(Router);
    // State: Controls the mobile menu visibility
  public isMenuOpen = signal(false);
  // State: Holds the current value of the search input
  public searchTerm = signal('');
  // State: Holds the results after filtering the mock data
  public filteredResults = signal<SearchResult[]>([]);
  // State: Controls the visibility of the desktop results dropdown (separate from search logic)
  public showDesktopResults = signal(false);

  // Computed: Checks if the search term is long enough to show results on mobile
  public isMobileSearchActive = computed(() => this.isMenuOpen() && this.searchTerm().length >= 2);
  // Computed: Checks if the desktop results panel should be visible
  public isDesktopResultsVisible = computed(() => this.showDesktopResults() && this.searchTerm().length > 0 && this.filteredResults().length > 0);

  /**
   * Simulated data for search.
   */
  private mockSearchResults: SearchResult[] = [
    { id: 1, title: 'Our Comprehensive Services', description: 'Explore our full range of design and development services.', path: 'services' },
    { id: 2, title: 'Case Study: Project Alpha', description: 'A deep dive into our recent Alpha project success story.', path: 'portfolio/alpha' },
    { id: 3, title: 'Pricing Plans Overview', description: 'Compare our basic, premium, and enterprise pricing tiers.', path: 'pricing' },
    { id: 4, title: 'How to Contact Support', description: 'Find all the ways to reach our customer support team.', path: 'contact' },
    { id: 5, title: 'Blog Post: The Future of UX', description: 'An article discussing modern user experience trends and predictions.', path: 'blog/future-ux' },
  ];

  /**
   * Toggles the state of the mobile menu.
   */
  public toggleMenu(): void {
    this.isMenuOpen.update(current => !current);
    // When opening the menu, ensure desktop results are hidden
    this.showDesktopResults.set(false);
    // If closing, clear the search term
    if (!this.isMenuOpen()) {
        this.searchTerm.set('');
        this.filteredResults.set([]);
    }
  }

  /**
   * Updates the search term signal and runs a search immediately.
   */
  public updateSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement;
    const term = input.value;
    this.searchTerm.set(term);
    this.filterResults(term);
  }

  /**
   * Core function to filter mock data based on the current search term.
   */
  private filterResults(term: string): void {
    const query = term.toLowerCase().trim();

    if (query.length < 2) {
      // Clear results if the query is too short
      this.filteredResults.set([]);
      return;
    }

    const results = this.mockSearchResults.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    this.filteredResults.set(results);
  }

  /**
   * Handles search submission (e.g., when pressing Enter).
   */
  public handleSearch(isMobile: boolean = false): void {
    // Re-run the filter logic explicitly
    this.filterResults(this.searchTerm());

    if (this.searchTerm().length > 0) {
      console.log(`[Search Submitted] Searching for: ${this.searchTerm()}`);

      if (isMobile) {
        // In a real app, you would navigate to the search results page here.
        this.handleResultClick(`search?q=${this.searchTerm()}`);
      }
    }
  }

  /**
   * Closes the desktop results dropdown after a small delay to allow click events to register.
   */
  public hideResultsWithDelay(): void {
    setTimeout(() => {
        this.showDesktopResults.set(false);
    }, 150);
  }

  /**
   * Handles clicking on a search result (works like navigateTo).
   */
  public handleResultClick(path: string): void {
    console.log(`Navigating to result path: /${path}`);
    // Reset all search state
    this.searchTerm.set('');
    this.filteredResults.set([]);
    this.showDesktopResults.set(false);

    // Close the mobile menu if open
    if (this.isMenuOpen()) {
        this.isMenuOpen.set(false);
    }
  }

  /**
   * Example function for navigation/action links
   */
  public navigateTo(path: string): void {
    // Closes the menu on click, improving mobile UX
    if (this.isMenuOpen()) {
        this.isMenuOpen.set(false);
    }
    console.log(`Navigating to main link: /${path}`);
    // Router navigation logic goes here:
    // inject(Router).navigate([path]);
  }

  modalOpen = signal(false);

  openApply(): void {
    this.modalOpen.set(true);
  }

  closeApply(): void {
    this.modalOpen.set(false);
  }
}

