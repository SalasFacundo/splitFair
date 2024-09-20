import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../add-data/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedVariable = new BehaviorSubject<Transaction[] | null>(null);

  constructor() { }

  setSharedVariable(value: Transaction[]) {
    this.sharedVariable.next(value);
  }

  getSharedVariable(): Observable<Transaction[] | null>{
    return this.sharedVariable.asObservable();
  }

}
