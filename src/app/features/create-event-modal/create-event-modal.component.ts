import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event_service';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})
export class CreateEventModalComponent {

  constructor(
    public eventService: EventService
    ) {}

    create() {
      this.eventService.create();
    }
}
