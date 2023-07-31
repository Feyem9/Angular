import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiftacheComponent } from './modiftache.component';

describe('ModiftacheComponent', () => {
  let component: ModiftacheComponent;
  let fixture: ComponentFixture<ModiftacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModiftacheComponent]
    });
    fixture = TestBed.createComponent(ModiftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
