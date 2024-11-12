import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  public bookImages: any = [
    '/assets/img/ob1.png',
    '/assets/img/ob2.png',
    '/assets/img/ob3.png',
    '/assets/img/ob1.png',
    '/assets/img/ob2.png',
    '/assets/img/ob3.png',
  ];
  books: any[] = [];
  filteredBooks: any[] = [];
  searchTerm: string = '';

  constructor( private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.books = [
      {
        id: 1,
        title: 'The Great Book',
        author: 'Mudassir Hussain',
        description: 'A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.',
      }
    ]
    this.filteredBooks = this.books;
  }
  onSearchChange(event: any) {
    const term = event.target.value.toLowerCase();
    this.searchTerm = term;

    if (term) {
      const regex = new RegExp(`(${term})`, 'gi');

      this.filteredBooks = this.books.map((book) => ({
        ...book,
        title: this.sanitizer.bypassSecurityTrustHtml(
          book.title.replace(regex, `<mark>$1</mark>`)
        ),
        author: this.sanitizer.bypassSecurityTrustHtml(
          book.author.replace(regex, `<mark>$1</mark>`)
        ),
        description: this.sanitizer.bypassSecurityTrustHtml(
          book.description.replace(regex, `<mark>$1</mark>`)
        ),
      }));
    } else {
      this.filteredBooks = this.books;
    }
  }
}
