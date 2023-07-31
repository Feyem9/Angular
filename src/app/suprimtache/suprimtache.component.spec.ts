import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimtacheComponent } from './suprimtache.component';

describe('SuprimtacheComponent', () => {
  let component: SuprimtacheComponent;
  let fixture: ComponentFixture<SuprimtacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuprimtacheComponent]
    });
    fixture = TestBed.createComponent(SuprimtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
