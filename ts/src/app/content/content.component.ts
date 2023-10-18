import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
