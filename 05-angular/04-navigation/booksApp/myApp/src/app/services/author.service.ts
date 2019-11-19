import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';

import { Author } from '../models/author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  // private baseurl = 'http://5dcebc3175f9360014c262d3.mockapi.io/authors/authors';
  private readonly baseurl = '/authors';


  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseurl);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.baseurl, author);
  }

  getAuthor(authorId: string): Observable<Author> {
    return this.http.get<Author>(`${this.baseurl}/${authorId}`);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.baseurl}/${author._id}`, author);
  }

  removeAuthor(authorId: string): Observable<Author> {
    return this.http.delete<Author>(`${this.baseurl}/${authorId}`);
  }
}
