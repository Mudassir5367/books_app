import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMyProfilePage } from './edit-my-profile.page';

describe('EditMyProfilePage', () => {
  let component: EditMyProfilePage;
  let fixture: ComponentFixture<EditMyProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
