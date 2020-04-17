import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookproductsComponent } from './lookproducts.component';

describe('LookproductsComponent', () => {
  let component: LookproductsComponent;
  let fixture: ComponentFixture<LookproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
