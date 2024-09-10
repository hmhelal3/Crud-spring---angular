import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient ) { }
  postAuthor(author: any):Observable<any> {
   return this.http.post(`${baseUrl}/api/author`, author);
  }

  getAllAuthor():Observable<any> {
    return this.http.get(`${baseUrl}/api/authors`);
  }
  getAuthorById(id: number):Observable<any> {
    return this.http.get(`${baseUrl}/api/author/${id}`);
  }
  updateAuthor(id: number, author: any): Observable<any> {
    return this.http.put(`${baseUrl}/api/author/${id}`, author);
  }
  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/api/author/${id}`);
  }
}
