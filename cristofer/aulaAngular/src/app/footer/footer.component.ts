import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  titulo = 'footer teste';
  constructor() { }

  ngOnInit() {
  }

}
