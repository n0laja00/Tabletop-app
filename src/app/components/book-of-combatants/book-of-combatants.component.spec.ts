import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfCombatantsComponent } from './book-of-combatants.component';

describe('BookOfCombatantsComponent', () => {
  let component: BookOfCombatantsComponent;
  let fixture: ComponentFixture<BookOfCombatantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOfCombatantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOfCombatantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
