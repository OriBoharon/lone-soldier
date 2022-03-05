import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title:string = ""  
  @Input() visualPath:string = ""  
  @Output() cardSelected: EventEmitter<any> = new EventEmitter();
  selected: boolean = false;
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event: any): void {
    this.selected = !this.selected;
    this.progress= Math.abs(this.progress-100);
    this.cardSelected.emit(this)
  }
}
