import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurBooksPage } from './our-books.page';

describe('OurBooksPage', () => {
  let component: OurBooksPage;
  let fixture: ComponentFixture<OurBooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
