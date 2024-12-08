import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public all_data: any;
  public Famous_books: any;
  constructor(private router: Router, private dataSerivce: DataService) {}

  ngOnInit() {
    this.all_data = this.dataSerivce.all_books;
    this.Famous_books = this.dataSerivce.Famous_books;
  }
  // isCenterSlide(index: number): boolean {
  //   const centerIndex = Math.floor(this.data.length / 2);
  //   return index === centerIndex;
  // }
  clickSearch() {
    console.log('click');
    this.router.navigate(['/search-book']);
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
