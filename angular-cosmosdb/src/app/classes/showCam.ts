import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route }
from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CanShowCam implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {


        if (this.router.url === "/evaluationTab") {
          //alert("current url" + this.router.url);
          console.log(this.router.url);
          this.router.navigate(['/cameraTab']);


        }


     return !(this.router.url === "/evaluationTab");

    }
    /*
    canLoad(route: Route): boolean {

      if (this.router.url === "/evaluationTab")
      {
        console.log(this.router.url);
        this.router.navigate(['/cameraTab']);


      }


      return !(this.router.url === "/evaluationTab");
    }*/


}
