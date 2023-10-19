import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {
  activeCard: string = 'create';

  createTopic() {
    this.activeCard = 'send';
  };

  sendTopic() {
    this.activeCard = 'sent';
  };

  constructor() { }

  ngOnInit(): void {
  }

}
