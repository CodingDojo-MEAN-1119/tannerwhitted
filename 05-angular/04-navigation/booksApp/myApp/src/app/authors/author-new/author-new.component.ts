import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from '../../models/author';
import { NgForm } from '@angular/forms';

import { AuthorService } from '../../services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author = new Author();

  @Output()
  createAuthor = new EventEmitter<Author>();

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.authorService.createAuthor(this.author)
      .subscribe(createdAuthor => {
        console.log(createdAuthor);
        this.author = new Author();
        form.reset();

        this.router.navigateByUrl('/');
      });


  }

}
