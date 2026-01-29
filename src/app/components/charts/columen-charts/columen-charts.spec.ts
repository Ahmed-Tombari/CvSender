import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ColumenChartsComponent } from './columen-charts';

describe('ColumenChartsComponent', () => {
  let component: ColumenChartsComponent;
  let fixture: ComponentFixture<ColumenChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumenChartsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumenChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
