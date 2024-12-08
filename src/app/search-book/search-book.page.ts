import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.page.html',
  styleUrls: ['./search-book.page.scss'],
})
export class SearchBookPage implements OnInit {
  public data = [
    {
      bookImg: '/assets/img/1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/4.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/5.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/6.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/7.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/10.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/11.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/12.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
  ];
  public data2 = [
    {
      bookImg: '/assets/img/b1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/b2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/b3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/b4.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/b5.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/b6.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/h1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/h2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/h3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/12.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
  ];
  constructor(private router: Router) {}

  // ngOnInit() {
  // }

  static_data: any = [
    {
      title: 'book one',
      image_url: '/assets/img/1.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book two',
      image_url: '/assets/img/2.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book three',
      image_url: '/assets/img/3.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book four',
      image_url: '/assets/img/4.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book five',
      image_url: '/assets/img/5.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book six',
      image_url: '/assets/img/6.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book seven',
      image_url: '/assets/img/7.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book eight',
      image_url: '/assets/img/12.jpg',
      description: 'description of allama iqbal book',
    },
    {
      title: 'book nine',
      image_url: '/assets/img/10.jpg',
      description: 'description of allama iqbal book',
    },
  ];

  searchTerm: string = '';
  filteredBooks = [...this.static_data];

  //  constructor(private router: Router) {}
  ngOnInit() {
    // Initially show all books
    this.filteredBooks = this.static_data;
  }

  filterBooks(event: any) {
    console.log('fun call-->', event);
    const searchValue = event.target.value?.toLowerCase() || '';
    this.filteredBooks = this.static_data.filter((book: any) =>
      book.title.toLowerCase().includes(searchValue)
    );
  }

  clickFn(index: any) {
    console.log('click fn is working', index);
    const selectedBook = this.filteredBooks[index];
    this.router.navigate(['/book-detail'], { state: { book: selectedBook } }); // Pass selected book data
  }
}
