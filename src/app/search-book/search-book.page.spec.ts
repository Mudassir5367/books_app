import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBookPage } from './search-book.page';

describe('SearchBookPage', () => {
  let component: SearchBookPage;
  let fixture: ComponentFixture<SearchBookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
