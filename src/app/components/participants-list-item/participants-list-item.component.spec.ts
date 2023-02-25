import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsListItemComponent } from './participants-list-item.component';

describe('ParticipantsListItemComponent', () => {
  let component: ParticipantsListItemComponent;
  let fixture: ComponentFixture<ParticipantsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
