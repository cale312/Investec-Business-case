import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityLimitsComponent } from './entity-limits.component';

describe('EntityLimitsComponent', () => {
  let component: EntityLimitsComponent;
  let fixture: ComponentFixture<EntityLimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityLimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
