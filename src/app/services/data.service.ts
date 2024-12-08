import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private bookSource = new BehaviorSubject<any[]>([]);
  public currentBooks$ = this.bookSource.asObservable();
  constructor() {}
  public all_books = [
    {
      id: 1,
      bookImg: '/assets/img/1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 2,
      bookImg: '/assets/img/2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 3,
      bookImg: '/assets/img/3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 4,
      bookImg: '/assets/img/4.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 5,
      bookImg: '/assets/img/5.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 6,
      bookImg: '/assets/img/6.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 7,
      bookImg: '/assets/img/7.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 8,
      bookImg: '/assets/img/10.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 9,
      bookImg: '/assets/img/11.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 10,
      bookImg: '/assets/img/12.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
  ];

  public Famous_books = [
    {
      id: 1,
      bookImg: '/assets/img/b1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 2,
      bookImg: '/assets/img/b2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 3,
      bookImg: '/assets/img/b3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 4,
      bookImg: '/assets/img/b4.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 5,
      bookImg: '/assets/img/b5.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 6,
      bookImg: '/assets/img/b6.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 7,
      bookImg: '/assets/img/h1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 8,
      bookImg: '/assets/img/h2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
      bookImages: [],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 9,
      bookImg: '/assets/img/h3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
    {
      id: 10,
      bookImg: '/assets/img/12.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
      bookImages: [
        '/assets/img/ob1.png',
        '/assets/img/ob2.png',
        '/assets/img/ob3.png',
        '/assets/img/ob1.png',
      ],
      pdf: '../../assets/pdf/toaz.info-fatherhood-principle-myles-munroe-pr_c792992f98afdc7656ea835e62e588e8.pdf',
    },
  ];

  setBooksDetail(books: any) {
    this.bookSource.next(books);
  }
}
