import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensFooterComponent } from './itens-footer.component';

describe('ItensFooterComponent', () => {
  let component: ItensFooterComponent;
  let fixture: ComponentFixture<ItensFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensFooterComponent]
    });
    fixture = TestBed.createComponent(ItensFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
