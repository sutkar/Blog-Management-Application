import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogPost } from '../../../models/blogPost';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss'
})
export class BlogFormComponent {
  blogForm!: FormGroup; 
  
  constructor(private fb: FormBuilder, 
    private blogService: BlogService
  ) { } 
  
  ngOnInit(): void { 
    this.blogForm = this.fb.group({ 
      username: ['', Validators.required], 
      text: ['', Validators.required] 
    }); 
  } 
    
  onSubmit(): void { 
    if (this.blogForm.valid) { 
      const newBlogPost: BlogPost = { 
        id: 0, 
        username: this.blogForm.get('username')?.value, 
        dateCreated: new Date().toDateString(), 
        text: this.blogForm.get('text')?.value 
      };
      
      this.blogService.addBlogPost(newBlogPost).subscribe(blog => { 
        console.log('Blog post added:', blog); 
      }); 
    }
  }
}
