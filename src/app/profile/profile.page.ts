import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'Muhammad Zain Ul Abidin',
    email: 'zain.985@gmail.com',
    phone: '123-456-7890',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6uFpvbf4pTiDwym5Q10wm-PuJFoAVC5Gv9Xw4adW1ajLjv3LG7L-dvBHPag0uptyDe0&usqp=CAU' 
  };
  isEditable = false;

  editProfile() {
    this.isEditable = !this.isEditable;
  }

  saveProfile() {
    
    console.log('Profile saved:', this.user);
    this.isEditable = false;
  }

  changeProfilePicture() {
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    
    fileInput.click();
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.user.profilePicture = e.target.result; 
        };
        reader.readAsDataURL(file); 
      }
    };
  }
}
