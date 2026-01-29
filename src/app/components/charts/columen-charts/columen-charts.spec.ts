import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumenCharts } from './columen-charts';

describe('ColumenCharts', () => {
  let component: ColumenCharts;
  let fixture: ComponentFixture<ColumenCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumenCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumenCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
