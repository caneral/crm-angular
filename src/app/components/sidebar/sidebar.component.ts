import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/menu/menu';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu: any;
  constructor() { 
    this.menu = menu;
  }

  ngOnInit(): void {
    console.log("MENU",this.menu)
  }


  

}
