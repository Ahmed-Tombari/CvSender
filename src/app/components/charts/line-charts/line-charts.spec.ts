import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { LineChartsComponent } from './line-charts';

describe('LineChartsComponent', () => {
  let component: LineChartsComponent;
  let fixture: ComponentFixture<LineChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
