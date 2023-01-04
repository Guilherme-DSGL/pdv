import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss']
})
export class ListTileComponent {
  @Input() text = 'Home';
  @Input() icon = 'home';
  @Input() link = '#';
}
