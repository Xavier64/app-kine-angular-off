import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundhomeComponent } from './backgroundhome.component';

describe('BackgroundhomeComponent', () => {
  let component: BackgroundhomeComponent;
  let fixture: ComponentFixture<BackgroundhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
