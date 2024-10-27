import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideComponent } from './nav-side.component';

describe('NavSideComponent', () => {
  let component: NavSideComponent;
  let fixture: ComponentFixture<NavSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSideComponent]
    });
    fixture = TestBed.createComponent(NavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
