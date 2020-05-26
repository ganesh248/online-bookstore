import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl="http://localhost:8080/api/v1/books";
  constructor(private httpClient: HttpClient) { }

  getBooks(theCategoryId: number): Observable<Book[]>{
    console.log(theCategoryId);
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.httpClient.get<getResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    );
  }
    
}

interface getResponseBooks{
  _embedded: {
    books: Book[];
  }
}