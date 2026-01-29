import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test4 } from './test4';

describe('Test4', () => {
  let component: Test4;
  let fixture: ComponentFixture<Test4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
