import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class PatriciaService {
  compteur2: number = 0;
  private subjectCompteur: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public observableCompteur: Observable<number> = this.subjectCompteur.asObservable();

  increaseCompteur() {
    this.compteur2 += 1;
    this.subjectCompteur.next(this.compteur2)
    console.log(this.compteur2);
  }
}
