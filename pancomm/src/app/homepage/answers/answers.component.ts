import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() index:any;
  constructor() { }

  ngOnInit(): void {
    console.log('index::',this.index);
    
  }

}
