import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}