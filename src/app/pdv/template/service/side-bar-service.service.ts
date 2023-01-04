import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  openSideBar: boolean = true;

  constructor() { }

  toggleSideBar(): any{
    this.openSideBar = !this.openSideBar;
    return this.openSideBar;
  }
}
