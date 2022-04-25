import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatriciaService} from "../patricia.service";

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  compteur: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private readonly patriciaService :PatriciaService) { }

  ngOnInit(): void {
  }

  button() {
    this.compteur += 1;
    this.newItemEvent.emit(this.compteur)
  }

  onButton2() {
    this.patriciaService.increaseCompteur()
  }
}
