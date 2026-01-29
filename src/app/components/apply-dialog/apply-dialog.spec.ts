import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDialog } from './apply-dialog';

describe('ApplyDialog', () => {
  let component: ApplyDialog;
  let fixture: ComponentFixture<ApplyDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
