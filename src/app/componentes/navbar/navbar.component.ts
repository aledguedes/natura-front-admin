import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const handleClickOutside = (event) => {
      let overlay = document.getElementById("overlay");
      let modal = document.getElementById("modal");
      if (!modal.contains(event.target)) {
          modal.style.display = 'none';
          overlay.style.display = 'none';
          document.removeEventListener('click', handleClickOutside, false);
      }
  }
  
  const openModal = () => {
      let overlay = document.getElementById("overlay");
      let modal = document.getElementById("modal");
      overlay.style.display = 'flex'
      modal.style.display = 'flex'
      setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
  } 
  }
}
