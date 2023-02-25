import { Information } from "./Information";
import { Participant } from "./Participant";

export interface ParticipantWithInformation {
    participant: Participant;
    information: Information;
}