import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../app-services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../pdv/template/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
