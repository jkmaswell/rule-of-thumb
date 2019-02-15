import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrBannerComponent } from './toastr-banner.component';

describe('ToastrBannerComponent', () => {
  let component: ToastrBannerComponent;
  let fixture: ComponentFixture<ToastrBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastrBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
