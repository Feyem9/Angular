import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutacheComponent } from './ajoutache.component';

describe('AjoutacheComponent', () => {
  let component: AjoutacheComponent;
  let fixture: ComponentFixture<AjoutacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutacheComponent]
    });
    fixture = TestBed.createComponent(AjoutacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
