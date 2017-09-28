import { Notification } from './notification/notification';
import { Component } from '@angular/core';
import { NotificationTypes } from './notification/notification-types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: String = 'app';

  notification1: Notification = new Notification('First Notification',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
  sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`, NotificationTypes.Ok,
  true, true, true);

  notification2: Notification = new Notification('',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
  sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`, NotificationTypes.Info,
  true, false, false);

  notification3: Notification = new Notification('First Notification',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
  sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`, NotificationTypes.Ok);

  notification4: Notification = new Notification('Info!!',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
  sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`, NotificationTypes.Info,
  true, false, true, '', 'see ya');

  notification5: Notification = new Notification('',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
  sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`, NotificationTypes.Warning,
  true, true, true, 'close', 'see ya');

  notification6: Notification = new Notification('An error Ocurred!!',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
  sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`, NotificationTypes.Error,
  false, false, false);
}
