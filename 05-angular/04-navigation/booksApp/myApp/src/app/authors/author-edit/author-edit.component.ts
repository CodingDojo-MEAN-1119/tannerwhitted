import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

import { AuthorService } from '../../services';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author: Author;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService,
    ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.authorService.getAuthor(id)),
      )
      .subscribe(author => {
        console.log('author from api', author);
        this.author = author;
      }
    );
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.authorService.updateAuthor(this.author)
      .subscribe(createdAuthor => {
        console.log(createdAuthor);
        this.author = new Author();
        form.reset();

        this.router.navigateByUrl('/');
      });


  }

}

