import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy, PLATFORM_ID } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../core/services/auth.services';
import { Subscription, switchMap, interval, Observable, map  } from 'rxjs';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/pacientes', title: 'Pacientes', icon: 'content_paste', class: '' },
  { path: '/odontograma', title: 'Odontograma', icon: 'library_books', class: '' },
  { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  { path: '/dentistas', title: 'Dentistas', icon: 'content_paste', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnDestroy {
  private isLoggedInSubscription!: Subscription;
  menuItems!: any[];
  mobileQuery: any;
  icon: boolean = true;
  isLoggedIn: boolean = false;
someObserver!: Observable<boolean>;
  showFiller = false;
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  isAuth:any;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private authService:AuthService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    //for version 17
    this.isLoggedInSubscription = this.authService.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if (isLoggedIn === true) {
          this.isLoggedIn = isLoggedIn;
        }
        return isLoggedIn;
      })
    ).subscribe();
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

// import {MediaMatcher} from '@angular/cdk/layout';
// import {ChangeDetectorRef, Component, OnDestroy, OnInit, Inject} from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// declare const $: any;
// declare interface RouteInfo {
//   path: string;
//   title: string;
//   icon: string;
//   class: string;
// }
// export const ROUTES: RouteInfo[] = [
//   { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
//   { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
//   { path: '/pacientes', title: 'Pacientes', icon: 'content_paste', class: '' },
//   { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
//   { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
//   { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
//   { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
//   { path: '/dentistas', title: 'Dentistas', icon: 'content_paste', class: '' },
//   { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
// ];

// @Component({
//   selector: 'app-slidebar',
//   templateUrl: './slidebar.component.html',
//   styleUrls: ['./slidebar.component.scss'],
// })
// export class SlidebarComponent implements OnDestroy {
//   mobileQuery: MediaQueryList;
//   menuItems!: any[];

//     ngOnInit(): void {
//       this.menuItems = ROUTES.filter(menuItem => menuItem);

//     }

//   fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

//   fillerContent = Array.from(
//     {length: 50},
//     () =>
//       `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
//   );

//   private _mobileQueryListener: () => void;

//   constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
//     this.mobileQuery = media.matchMedia('(max-width: 600px)');
//     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//     this.mobileQuery.addListener(this._mobileQueryListener);
//   }

//   ngOnDestroy(): void {
//     this.mobileQuery.removeListener(this._mobileQueryListener);
//   }

// }
