import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  scrollToElement(selector) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;
  }

}
