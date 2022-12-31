import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-side-bar',
  templateUrl: './title-side-bar.component.html',
  styleUrls: ['./title-side-bar.component.scss']
})
export class TitleSideBarComponent {
    @Input() title: string = 'Title';
}
