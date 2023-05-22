import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event_service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  constructor(
    public eventService: EventService
    ) {}
}
