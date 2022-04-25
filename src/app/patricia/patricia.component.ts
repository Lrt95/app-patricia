import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'patricia',
  templateUrl: './patricia.component.html',
  styleUrls: ['./patricia.component.scss']
})
export class PatriciaComponent implements OnInit {

  compteur: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  onCompteur($event: number) {
    this.compteur = $event
  }
}
