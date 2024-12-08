import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private plateform: Platform) {
    this.initialization();
  }

  initialization() {
    this.plateform.ready().then(() => {
      // this.router.navigateByUrl('splash-screen');
      this.router.navigateByUrl('dashboard');
    });
  }
}
