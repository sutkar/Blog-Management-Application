import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogPost';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://localhost:44329/api/BlogPost'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

  getBlogPost(id: number): Observable<BlogPost> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BlogPost>(url);
  }

  addBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.apiUrl, blogPost, httpOptions);
  }

  updateBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    const url = `${this.apiUrl}/${blogPost.id}`;
    return this.http.put<BlogPost>(url, blogPost, httpOptions);
  }

  deleteBlogPost(id: number): Observable<BlogPost> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<BlogPost>(url, httpOptions);
  }
}
