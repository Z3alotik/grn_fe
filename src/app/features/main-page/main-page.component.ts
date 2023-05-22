import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateEventModalComponent } from '../create-event-modal/create-event-modal.component'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  bsModalRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal() {
    this.bsModalRef = this.modalService.show(CreateEventModalComponent);
  }
}
