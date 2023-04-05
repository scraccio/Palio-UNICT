import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerBannerComponent } from './main-container-banner.component';

describe('MainContainerBannerComponent', () => {
  let component: MainContainerBannerComponent;
  let fixture: ComponentFixture<MainContainerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContainerBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContainerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
