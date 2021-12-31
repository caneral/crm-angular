import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  menu = [
    {
      title:'Home',
      icon: 'home'
    },
    {
      title:'Sample',
      icon:'build'
    }
  ];

  ngOnInit(): void {
  }

  

}
