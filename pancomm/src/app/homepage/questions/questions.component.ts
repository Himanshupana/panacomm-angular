import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions:any = []

  constructor(private _question:QuestionService) { }

  ngOnInit(): void {
    this._question.allQuestions().subscribe((data)=>{
      console.log(data);
      this.questions = data
      console.log(this.questions[2].questions);      
    })
  }
  
  
}
