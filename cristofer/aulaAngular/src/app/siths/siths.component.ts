import { Component, OnInit } from '@angular/core';
import { Sith } from './sith.model';

@Component({
  selector: 'ang-siths',
  templateUrl: './siths.component.html',
  styleUrls: ['./siths.component.css']
})
export class SithsComponent implements OnInit {
  siths: Sith[] = [
    { name: 'Lews Hamilton' },
    { name: 'Valteri Bottas' },
    { name: 'Esteban Ocon' }
  ];
  constructor() { }

  ngOnInit() {
  }
}
