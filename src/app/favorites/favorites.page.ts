import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public favoriteBooks = [
    { 
      bookImg: '/assets/img/1.jpg', 
      bookName: 'EMILE ZOLA', 
      authName: 'Michael Rosen' 
    },
    { 
      bookImg: '/assets/img/b3.jpg', 
      bookName: 'TRAVELLER\'S', 
      authName: 'Michael Rosen' 
    },
    { 
      bookImg: '/assets/img/b5.jpg', 
      bookName: 'FATHERHOOD', 
      authName: 'Marcus Berkmann' 
    },
    { 
      bookImg: '/assets/img/h2.jpg', 
      bookName: 'FATHERHOOD', 
      authName: 'Marcus Berkmann' 
    }
  ];
}
