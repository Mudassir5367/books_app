import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'splash-screen',
    loadChildren: () =>
      import('./splash-screen/splash-screen.module').then(
        (m) => m.SplashScreenPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'book-detail',
    loadChildren: () =>
      import('./book-detail/book-detail.module').then(
        (m) => m.BookDetailPageModule
      ),
  },
  {
    path: 'edit-my-profile',
    loadChildren: () =>
      import('./edit-my-profile/edit-my-profile.module').then(
        (m) => m.EditMyProfilePageModule
      ),
  },
  {
    path: 'search-book',
    loadChildren: () =>
      import('./search-book/search-book.module').then(
        (m) => m.SearchBookPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavoritesPageModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsPageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'help-page',
    loadChildren: () =>
      import('./help-page/help-page.module').then((m) => m.HelpPagePageModule),
  },
  {
    path: 'our-books',
    loadChildren: () =>
      import('./our-books/our-books.module').then((m) => m.OurBooksPageModule),
  },
  {
    path: 'add-book',
    loadChildren: () =>
      import('./add-book/add-book.module').then((m) => m.AddBookPageModule),
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./my-profile/my-profile.module').then(
        (m) => m.MyProfilePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
