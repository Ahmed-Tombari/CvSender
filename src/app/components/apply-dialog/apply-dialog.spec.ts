import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ApplyDialogComponent } from './apply-dialog';

describe('ApplyDialogComponent', () => {
  let component: ApplyDialogComponent;
  let fixture: ComponentFixture<ApplyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyDialogComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
