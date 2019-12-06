
import { Component, OnInit } from '@angular/core';
import {Student} from '../student/student.model';
@Component({
  selector: 'ang-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Han Solo', isJedi: false},
    {name: 'Leia', isJedi: false}
  ];
  constructor() { }
  ngOnInit() {
  }
}


