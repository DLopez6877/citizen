import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillStarsComponent } from './bill-stars.component';

describe('BillStarsComponent', () => {
  let component: BillStarsComponent;
  let fixture: ComponentFixture<BillStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
