import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  public apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }
  
  getList(): Observable<Array<any>> {
    //console.log(this.http.get<Array<String>>(this.apiUrl))
    return this.http.get<Array<any>>(this.apiUrl)
  }
}
