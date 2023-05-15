import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() cardClass: string;

  constructor() {
    this.text = '';
    this.title = '';
    this.cardClass = '';
  }
}
