import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirsDetailsComponent } from './choirs-details.component';

describe('ChoirsDetailsComponent', () => {
  let component: ChoirsDetailsComponent;
  let fixture: ComponentFixture<ChoirsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoirsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoirsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
