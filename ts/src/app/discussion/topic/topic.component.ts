import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic!: {
    subject:string,
    author: string,
    comment: string,
    approved: boolean,
    likes: number,
    answers: number,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
