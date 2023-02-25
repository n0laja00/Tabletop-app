import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieRulesComponent } from './die-rules.component';

describe('DieRulesComponent', () => {
  let component: DieRulesComponent;
  let fixture: ComponentFixture<DieRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
