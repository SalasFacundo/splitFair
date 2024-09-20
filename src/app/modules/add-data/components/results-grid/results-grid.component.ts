import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/shared-service.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.scss']
})
export class ResultsGridComponent implements OnInit {

  transactions!: Transaction[] | null;

  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    this.initVars();
  }

  initVars(){
    this.sharedService.getSharedVariable().subscribe( response => {
      this.transactions = response;
    })
  }

}
