import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalioMainComponent } from './palio-main.component';

describe('PalioMainComponent', () => {
  let component: PalioMainComponent;
  let fixture: ComponentFixture<PalioMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalioMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
