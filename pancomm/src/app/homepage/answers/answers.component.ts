import { Component, Input, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/service/answer.service';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() index:any;
  answers:any = []
  constructor(private _answer:AnswerService) { }
  
  ngOnInit(): void {
    console.log('index::',this.index);
    this._answer.allAnswers(this.index).subscribe((data=>{
      console.log(data);
      this.answers = data
      // console.log("okok",this.answers);
      
    }))
  }

}
