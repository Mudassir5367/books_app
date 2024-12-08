import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  newBook = {
    bookImg: '', // will hold the image URL or path
    bookName: '',
    authName: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  saveBook() {
    if (
      this.newBook.bookName &&
      this.newBook.authName &&
      this.newBook.bookImg
    ) {
      // this.bookService.addBook(this.newBook);
      this.router.navigate(['/our-books']);
    } else {
      alert('Please fill out all fields');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newBook.bookImg = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
