import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibPrjComponent } from './test-lib-prj.component';

describe('TestLibPrjComponent', () => {
  let component: TestLibPrjComponent;
  let fixture: ComponentFixture<TestLibPrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibPrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
