import { CommentService } from './../../services/comment.service';
import { IComment } from './../../interfaces/comment.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:IComment[]
  constructor(private commentsService:CommentService) { }

  ngOnInit(): void {
    this.commentsService.getAll().subscribe(value=>this.comments=value)
  }

}
