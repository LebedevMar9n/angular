import { CommentsService } from './../../services/comment.service';
import { IComment } from './../../interfaces/comments.interface';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[]
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getAll().subscribe(value => this.comments = value)
  }

}
