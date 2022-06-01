import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IComment } from './../../interfaces/comments.interface';
import { CommentsService } from './../../services/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;
      if (state) {
        this.comment = state
      } else {
        this.commentsService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
