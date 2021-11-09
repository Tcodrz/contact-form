import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() onBack: EventEmitter<void> = new EventEmitter<void>();
}
