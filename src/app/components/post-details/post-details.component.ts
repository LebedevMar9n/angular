import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../../services/post.service';
import { IPost } from './../../interfaces/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post:IPost

  constructor(private postService:PostService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      const state=this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;

      if(state){
        this.post=state
      }else{
        this.postService.getById(id).subscribe(value=>this.post=value)
      }
    })
  }

}
