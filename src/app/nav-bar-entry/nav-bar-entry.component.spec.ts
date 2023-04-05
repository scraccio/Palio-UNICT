import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEntryComponent } from './nav-bar-entry.component';

describe('NavBarEntryComponent', () => {
  let component: NavBarEntryComponent;
  let fixture: ComponentFixture<NavBarEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
