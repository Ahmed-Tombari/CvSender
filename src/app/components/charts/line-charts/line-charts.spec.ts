import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCharts } from './line-charts';

describe('LineCharts', () => {
  let component: LineCharts;
  let fixture: ComponentFixture<LineCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
