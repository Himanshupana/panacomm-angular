import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {
  }

  allAnswers(data: any): Observable<any> {
    let data0 = {
      queNO : data
    }
    return this.http.post('http://localhost:3000/api/v1/answers', data0)
  }
}
