import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { PieChartsComponent } from './pie-charts';

describe('PieChartsComponent', () => {
  let component: PieChartsComponent;
  let fixture: ComponentFixture<PieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
