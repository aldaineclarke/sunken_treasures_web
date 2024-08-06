import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFooterComponent } from './mini-footer.component';

describe('MiniFooterComponent', () => {
  let component: MiniFooterComponent;
  let fixture: ComponentFixture<MiniFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniFooterComponent]
    });
    fixture = TestBed.createComponent(MiniFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
