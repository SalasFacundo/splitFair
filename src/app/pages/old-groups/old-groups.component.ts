import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'old-groups',
  templateUrl: './old-groups.component.html',
  styleUrls: ['./old-groups.component.scss']
})
export class OldGroupsComponent implements OnInit {

  groups: Group[] = [
    {
      name: 'Grupo 1',
      date: new Date('2022-01-01'),
      amount: 100
    },
    {
      name: 'Grupo 2',
      date: new Date('2022-02-01'),
      amount: 150
    },
    {
      name: 'Grupo 3',
      date: new Date('2022-03-01'),
      amount: 200
    },
    {
      name: 'Grupo 4',
      date: new Date('2022-04-01'),
      amount: 250
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
