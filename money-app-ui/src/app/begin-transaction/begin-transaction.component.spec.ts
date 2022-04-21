import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginTransactionComponent } from './begin-transaction.component';

describe('BeginTransactionComponent', () => {
  let component: BeginTransactionComponent;
  let fixture: ComponentFixture<BeginTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
