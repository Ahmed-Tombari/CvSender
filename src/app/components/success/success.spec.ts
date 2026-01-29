import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ApplySuccessComponent } from './success';

describe('ApplySuccessComponent', () => {
  let component: ApplySuccessComponent;
  let fixture: ComponentFixture<ApplySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplySuccessComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
