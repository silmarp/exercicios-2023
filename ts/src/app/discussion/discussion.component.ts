import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {
  activeCard: string = 'create';

  exampleTopic = {
    subject: "Assunto da pergunta aparece aqui",
    author: "Carlos Henrique Santos",
    comment: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...",
    approved: true,
    likes: 1,
    answers: 1,
  };

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
