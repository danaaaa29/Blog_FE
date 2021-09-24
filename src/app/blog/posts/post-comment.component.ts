import { Component, OnInit } from '@angular/core';
import { IComment } from "../model/post-comment.model";
import { PostCommentService } from "./services/post-comment.service";
import { ActivatedRoute,  Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";




@Component({
  selector: 'app-post-comment',
  templateUrl: 'post-comment.component.html',
  styleUrls: ['post-comment.component.scss']
})

export class PostCommentComponent implements OnInit {
  public comments: IComment[] = [];
  // @ts-ignore
  public comForm: FormGroup;
  isEditing: boolean = false;
  togglePanel: any = {};

  hintColor = '#7b1fa2';


  constructor(private commentService: PostCommentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.commentService.getAllComments(this.activatedRoute.snapshot.params.postId)
      .subscribe(res => {
        this.comments = res;
      })
    this.comForm = new FormGroup({
      'commentAuthor' : new FormControl('', Validators.required),
      'commentEmail' : new FormControl('', [Validators.required, Validators.email]),
      'commentContent' : new FormControl('', Validators.required),
    })
  }

  getErrorMessage() {
    if (this.comForm.controls.commentEmail.hasError('required')) {
      return 'Please enter your email!'
    }
    if (this.comForm.controls.commentAuthor.hasError('required')) {
      return 'Ceva'
    }
    return this.comForm.controls.commentEmail.hasError('email') ? 'Not a valid email' : '';
  }

  createFromForm() {
    const com = {
      commentAuthor: this.comForm.get(['commentAuthor'])?.value,
      commentEmail: this.comForm.get(['commentEmail'])?.value,
      commentContent: this.comForm.get(['commentContent'])?.value,
    }
    return com;
  }

  onSubmit() {
    if (!this.isEditing) {
      // @ts-ignore
      this.commentService.createComment(this.activatedRoute.snapshot.params.postId, this.createFromForm())
        .subscribe();
      window.location.reload();
    } else
    {
      this.commentService.updateComment(this.activatedRoute.snapshot.params.postId, this.activatedRoute.snapshot.queryParams['commentId'], this.comForm.value)
        .subscribe(() => {

        });
      this.clearQueryParams();
    }
  }

  onCommentCancel() {
    if (this.isEditing) {
      this.router.navigate([], {relativeTo: this.activatedRoute}).then(() => {
        this.comForm.reset();
        this.isEditing = false;
      });
    } else
    {
      this.router.navigate(['/posts']);
    }
  }

  onEditComment(comment: IComment) {
    this.router.navigate( [], {
      relativeTo: this.activatedRoute,
      queryParams: { commentId: comment.id},
      queryParamsHandling: 'merge'
    })
    this.isEditing = true;
    this.comForm.patchValue({
      id: comment.id,
      commentAuthor: comment.commentAuthor,
      commentEmail:  comment.commentEmail,
      commentContent: comment.commentContent,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt
    })
  }

  onDeleteComment(id: number) {
    if (id) {
      this.commentService.deleteComment(this.activatedRoute.snapshot.params.postId, id)
        .subscribe(() => {
          const index = this.comments.findIndex(deleteCom => deleteCom.id === id);
          this.comments.splice(index, 1);
        });
    }
  }

  onViewComment(commentId: number) {
    this.router.navigate([commentId], {relativeTo: this.activatedRoute});
  }

  clearQueryParams() {
    this.router.navigate([], {
      queryParams: {
        'commentId': null,
      },
      queryParamsHandling: 'merge'
    })
  }
}
