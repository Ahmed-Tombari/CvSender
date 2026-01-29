import {
  Component,
  ChangeDetectionStrategy,
  signal,
  output,
  input,
  inject
} from '@angular/core';

import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApplyService } from '../../core/services/apply.service';
import { ApplyModels } from '../../core/models/apply.model';
import { i18n, setLang, LanguageCode } from '../../core/services/i18n.service';

type Lang = 'English' | 'French' | 'Arabic';

interface LangOption {
  code: Lang;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-apply-dialog',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './apply-dialog.html',
  styleUrls: ['./apply-dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyDialogComponent {
  // parent controls opening
  isOpen = input<boolean>(false);

  // notify parent when closed
  closed = output<void>();

  private fb = inject(FormBuilder);
  private svc = inject(ApplyService);
  private router = inject(Router);

  // Expose i18n signal to template
  public i18n = i18n;

  loading = signal(false);
  error = signal<string | null>(null);

  langOpen = signal(false);
  cvOpen = signal(false);

  languages: LangOption[] = [
    { code: 'English', label: 'English', flag: 'fi fi-gb' },
    { code: 'French', label: 'Français', flag: 'fi fi-fr' },
    { code: 'Arabic', label: 'العربية', flag: 'fi fi-sa' }
  ];

  cvOptions = [
    { id: 'Cv-Ahmed-Tombari-Frontend', label: 'Cv-Ahmed-Tombari-Frontend' },
    { id: 'Cv-Ahmed-Tombari-Fullstack-Java-Angular', label: 'Cv-Ahmed-Tombari-Fullstack-Java-Angular' },
    { id: 'Cv-Ahmed-Tombari-Java-JEE', label: 'Cv-Ahmed-Tombari-Java-JEE' }
  ];

  form = this.fb.group({
    language: ['English', Validators.required],
    hr_email: ['', [Validators.required, Validators.email]],
    position: ['', Validators.required],
    subject: ['', Validators.required],
    description: ['', Validators.required],
    cv_name: ['', Validators.required]
  });

  constructor() {
    const detected = this.detectLanguage();
    this.form.patchValue({ language: detected });
    this.applyLanguageDefaults(detected);

    this.form.get('language')?.valueChanges.subscribe(val => {
      if (val) this.applyLanguageDefaults(val as Lang);
    });
  }

  detectLanguage(): Lang {
    const nav = (navigator.language || navigator.languages?.[0] || 'en').toLowerCase();
    if (nav.startsWith('fr')) return 'French';
    if (nav.startsWith('ar')) return 'Arabic';
    return 'English';
  }

  applyLanguageDefaults(lang: Lang): void {
    const map: Record<Lang, { code: LanguageCode, values: any }> = {
      English: {
        code: 'en',
        values: {
          language: 'English',
          hr_email: 'tombariahmed9@gmail.com',
          position: 'Full Stack Java JEE / Angular Developer',
          subject: 'Application – Full Stack Java Developer',
          description: 'Ahmed Tombari – Full Stack Developer with 3 years of experience',
          cv_name: this.cvOptions[1].id
        }
      },
      French: {
        code: 'fr',
        values: {
          language: 'French',
          hr_email: 'tombariahmed9@gmail.com',
          position: 'Développeur Full Stack Java JEE / Angular',
          subject: 'Candidature – Développeur Full Stack Java',
          description: "Ahmed Tombari – Développeur Full Stack avec 3 ans d'expérience",
          cv_name: this.cvOptions[1].id
        }
      },
      Arabic: {
        code: 'ar',
        values: {
          language: 'Arabic',
          hr_email: 'tombariahmed9@gmail.com',
          position: 'مطور Full Stack Java JEE / Angular',
          subject: 'طلب توظيف – مطور Full Stack Java',
          description: 'أحمد تومباري – مطور Full Stack خبرة 3 سنوات',
          cv_name: this.cvOptions[1].id
        }
      }
    };

    const config = map[lang];
    if (config) {
      // 1. Update Global Language Service (updates UI text)
      setLang(config.code);
      // 2. Update Form Values (updates input values)
      this.form.patchValue(config.values, { emitEvent: false });
    }
  }

  selectedLang() {
    return this.languages.find(l => l.code === this.form.value.language)!;
  }

  selectedCV() {
    return this.cvOptions.find(c => c.id === this.form.value.cv_name)?.label ?? this.i18n().cvPlaceholder;
  }

  toggleLang(): void {
    this.langOpen.update(v => !v);
  }

  toggleCV(): void {
    this.cvOpen.update(v => !v);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const payload = this.form.value as ApplyModels.ApplyForm;

    this.svc.sendApply(payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/apply/success']);
        this.closed.emit();
      },
      error: err => {
        this.loading.set(false);
        this.error.set(err?.message ?? this.i18n().errorDefault);
      }
    });
  }
}
