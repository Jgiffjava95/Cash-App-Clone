import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortraitComponent } from './user-portrait.component';

describe('UserPortraitComponent', () => {
  let component: UserPortraitComponent;
  let fixture: ComponentFixture<UserPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPortraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
