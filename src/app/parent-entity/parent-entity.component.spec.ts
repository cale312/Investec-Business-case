import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEntityComponent } from './parent-entity.component';

describe('ParentEntityComponent', () => {
  let component: ParentEntityComponent;
  let fixture: ComponentFixture<ParentEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
