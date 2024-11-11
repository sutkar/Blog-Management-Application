import { Component } from '@angular/core';
import { BlogPost } from '../../../models/blogPost';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs: BlogPost[] = []; 
  
  constructor(private blogService: BlogService) { } 
  
  ngOnInit(): void { 
    this.getBlogs(); 
  } 
  
  getBlogs(): void { 
    this.blogService.getBlogPosts().subscribe(blogs => this.blogs = blogs); 
  
  }
}
