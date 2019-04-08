import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT  } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'lga-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }
  public scrollToSection(section): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: section,
      scrollOffset : 55,
      duration : 1000,
      easingLogic : this.myEasing,
      interruptible : false
    });
  }
  public myEasing: any = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  doSmth(reachedTarget: boolean): void {
      if (reachedTarget) {
          console.log('Yeah, we reached our destination');
      } else {
          console.log('Ohoh, something interrupted us');
      }
  }
}
