import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbpoard',
  templateUrl: './dashbpoard.component.html',
  styleUrl: './dashbpoard.component.scss'
})
export class DashbpoardComponent {
  storage:any;
  constructor(private router:Router,@Inject(PLATFORM_ID) private platformId: any){
    if (isPlatformBrowser(platformId)) { // Do work
    
      if(!sessionStorage.getItem("auth-token")){
        this.router.navigate(['/auth/login']);}
      }
    }

  
  
}
