import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidComponentComponent } from './mid-component.component';

describe('MidComponentComponent', () => {
  let component: MidComponentComponent;
  let fixture: ComponentFixture<MidComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
