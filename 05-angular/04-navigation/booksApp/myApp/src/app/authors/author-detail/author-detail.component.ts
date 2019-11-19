import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/models/author';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap} from 'rxjs/operators';

import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input()
  author: Author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute)
    {}

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

}
