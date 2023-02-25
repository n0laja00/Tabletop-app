import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Participant } from 'src/app/interfaces/Participant';


@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  participants: Participant[] = [{
    id:1,
    name:'string1',
    hitPoints:12,
    hitPointMaximum:13,
    hostile:false,
    informationId:14,
  },{
    id: 2,
    name:'string2',
    hitPoints:22,
    hitPointMaximum:23,
    hostile:true,
    informationId:24,
  },{
    id:3,
    name:'string3',
    hitPoints:32,
    hitPointMaximum:33,
    hostile:true,
    informationId:33,
  }];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants, event.previousIndex, event.currentIndex);
  }


  changeParticipant(participant:Participant) {
    let foundIndex = this.participants.findIndex(p => p.id == participant.id);
    this.participants[foundIndex] = participant;
    console.log('Participant has ' + this.participants[foundIndex].hitPoints + ' hit points.')
  }
}
