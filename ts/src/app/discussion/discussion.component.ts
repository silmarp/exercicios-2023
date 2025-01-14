import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {
  activeCard: string = 'create';

  exampleTopic: Topic = {
    subject: "Assunto da pergunta aparece aqui",
    author: "Carlos Henrique Santos",
    comment: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...",
    approved: true,
    likes: 1,
    answers: 1,
  };

  topics: Array<Topic> = [
    this.exampleTopic,
  ];

  formTopic = new FormGroup ({
    subject: new FormControl(''),
    content: new FormControl(''),
  });

  createTopic() {
    this.activeCard = 'send';
  };

  sendTopic() {
    let newTopic: Topic = {
      subject: this.formTopic.value.subject as string,
      author: "Example Author",
      comment: this.formTopic.value.content as string,
      approved: false,
      likes: 0,
      answers: 0,
    };
    this.formTopic.reset();

    this.activeCard = 'sent';
    this.topics.push(newTopic);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
