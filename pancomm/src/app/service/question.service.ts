import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  allQuestions():Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/questions')
  }
}
