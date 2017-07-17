import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislatorListComponent } from './legislator-list.component';

describe('LegislatorListComponent', () => {
  let component: LegislatorListComponent;
  let fixture: ComponentFixture<LegislatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
