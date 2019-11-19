import { Component, OnInit } from '@angular/core';

import { Author } from '../../models/author';

import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  selectedAuthor: Author;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }


  onSelect(author: Author) {
    console.log('selecting author', author);


    if (this.selectedAuthor === author) {
      this.selectedAuthor = null;
    } else {
      this.selectedAuthor = author;
    }
  }

  onCreate(author: Author) {

    console.log('creating author', author);

    this.authorService.createAuthor(author)
      .subscribe(createdAuthor => {
        console.log('created author', author);
        this.authors.push(createdAuthor);
      });
    }

  onUpdate(author: Author) {
    console.log('update author', author);
    this.authorService.updateAuthor(author).subscribe(selectedAuthor => {
      console.log('should update');
    });
  }
  onDelete(author: Author) {
    console.log('deleting author', author);
    this.authorService.removeAuthor(author._id).subscribe(deletedAuthor => {
      console.log('deleted author', deletedAuthor);

      this.authors = this.authors.filter(
        currentAuthor => currentAuthor._id !== deletedAuthor._id
      );
    })
  }

  onEvent(author: Author): void {
    event.stopPropagation();
  }
}
