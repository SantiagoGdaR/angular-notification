import { Component } from '@angular/core';
import { NotificationTypes } from './notification/notification-types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: String = 'app';

  shortText: String = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
    sollicitudin ultrices est imperdiet id.`;

  longText: String = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`;

  htmlText: String = `<strong>ERROR! </strong>
    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`;
}
