import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Participant } from 'src/app/interfaces/Participant';

@Component({
  selector: 'app-participants-list-item',
  templateUrl: './participants-list-item.component.html',
  styleUrls: ['./participants-list-item.component.scss']
})
export class ParticipantsListItemComponent {

  @Input() participant: Participant;
  @Output() onChange: EventEmitter<Participant> = new EventEmitter();

  onChangeParticipant(participant: Participant, form: NgForm) {  
    participant.hitPoints = form.value.hitPoints;
    this.onChange.emit(participant);
    console.log(participant.hitPoints);
  }



}
