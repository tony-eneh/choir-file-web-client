import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirsListComponent } from './choirs-list.component';

describe('ChoirsListComponent', () => {
  let component: ChoirsListComponent;
  let fixture: ComponentFixture<ChoirsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoirsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoirsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
