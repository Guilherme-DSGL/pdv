import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarService } from '../service/side-bar-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private sideBarService: SideBarService){

  }

  toggleSideBar(){
    this.sideBarService.toggleSideBar();
  }
}
