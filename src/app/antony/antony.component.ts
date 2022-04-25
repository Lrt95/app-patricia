import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PatriciaService} from "../patricia/patricia.service";
import {BehaviorSubject, map, Observable, Subject, tap} from "rxjs";

@Component({
  selector: 'app-antony',
  templateUrl: './antony.component.html',
  styleUrls: ['./antony.component.scss']
})
export class AntonyComponent implements OnInit {

  compteur: string = "";

  compteur3: number= 0;

  constructor(private readonly patriciaService:PatriciaService) { }

  ngOnInit(): void {
    this.patriciaService.observableCompteur
      .pipe(
        tap((competur) => {
          console.log(competur)
          this.compteur3 = competur + 6;
        }
        ),
        map((compteur) => {
          return "Patricia " + compteur
        })
      ).subscribe(compteur => {
      this.compteur = compteur
    })
  }


}
