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
import { DataService } from '../services/data.service';
// import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  public bookImg: any;
  // books: any[] = [];
  filteredBooks: any[] = [];
  searchTerm: string = '';
  // public filePath: any;
  constructor(
    private sanitizer: DomSanitizer,
    private dataSerivce: DataService
  ) {}

  ngOnInit() {
    this.dataSerivce.currentBooks$.subscribe((books) => {
      this.bookImg = books;
    });
    // this.filteredBooks = this.books;
  }
  // onSearchChange(event: any) {
  //   const term = event.target.value.toLowerCase();
  //   this.searchTerm = term;

  //   if (term) {
  //     const regex = new RegExp(`(${term})`, 'gi');

  //     this.filteredBooks = this.books.map((book) => ({
  //       ...book,
  //       title: this.sanitizer.bypassSecurityTrustHtml(
  //         book.title.replace(regex, `<mark>$1</mark>`)
  //       ),
  //       author: this.sanitizer.bypassSecurityTrustHtml(
  //         book.author.replace(regex, `<mark>$1</mark>`)
  //       ),
  //       description: this.sanitizer.bypassSecurityTrustHtml(
  //         book.description.replace(regex, `<mark>$1</mark>`)
  //       ),
  //     }));
  //   } else {
  //     this.filteredBooks = this.books;
  //   }
  // }

  // pickPDFFile = async () => {
  //   const result = await FilePicker.pickFiles({
  //     types: ['application/pdf'],
  //     readData: true,
  //   });
  //   result ? (this.filePath = result.files[0].path) : alert('no file path');
  // };

  downloadPDF() {
    const pdfUrl =
      '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Fatherhood Principle - Myles Munroe.pdf';
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
