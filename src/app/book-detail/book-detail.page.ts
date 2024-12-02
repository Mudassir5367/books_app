// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-book-detail',
//   templateUrl: './book-detail.page.html',
//   styleUrls: ['./book-detail.page.scss'],
// })
// export class BookDetailPage implements OnInit {
//   public bookImages: any = [
//     '/assets/img/ob1.png',
//     '/assets/img/ob2.png',
//     '/assets/img/ob3.png',
//     '/assets/img/ob1.png',
//     '/assets/img/ob2.png',
//     '/assets/img/ob3.png',
//   ];
//   public bookContent = '';

//   constructor() {}

//   ngOnInit() {}
// }

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { FilePicker } from '@capawesome/capacitor-file-picker';

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
  // public filePath: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.books = [
      {
        id: 1,
        title: 'The Great Book',
        author: 'Mudassir Hussain',
        description:
          'A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.A novel about the American dream in the Jazz Age.',
      },
    ];
    this.filteredBooks = this.books;
  }
  onSearchChange(event: any) {
    console.log('onSearchChange----------------------> in');
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

  // pickPDFFile = async () => {
  //   const result = await FilePicker.pickFiles({
  //     types: ['application/pdf'],
  //     readData: true,
  //   });
  //   result ? (this.filePath = result.files[0].path) : alert('no file path');
  // };

  downloadPDF() {
    // Define the path to your PDF file in the assets folder
    const pdfUrl =
      '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf';

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Fatherhood Principle - Myles Munroe.pdf'; // Set the file name for download
    anchor.target = '_blank'; // Optional: open the link in a new tab

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger the download
    anchor.click();

    // Remove the anchor from the DOM
    document.body.removeChild(anchor);
  }
}
