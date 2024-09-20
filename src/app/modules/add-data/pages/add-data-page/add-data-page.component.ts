import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared-service.service';

@Component({
  selector: 'add-data-page',
  templateUrl: './add-data-page.component.html',
  styleUrls: ['./add-data-page.component.scss']
})
export class AddDataPageComponent implements OnInit {

  showResults: boolean = false;
  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSharedVariable().subscribe( response => {
      this.showResults = response?.length != undefined && response?.length > 0;
    })
  }

}
