import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontComponent } from './font.component';

describe('FontComponent', () => {
  let component: FontComponent;
  let fixture: ComponentFixture<FontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontComponent]
    });
    fixture = TestBed.createComponent(FontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
