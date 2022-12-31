import { Component  } from '@angular/core';
import { SideBarService } from '../service/side-bar-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {


  constructor(public sidebarService: SideBarService){

  }

  
}
