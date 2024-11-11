import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../models/blogPost';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  @Input() blog!: BlogPost;
}
