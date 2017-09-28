import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Notification } from './notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnChanges {
  @Input() notification: Notification;

  constructor() { }

  isOkNotification = (): boolean => {
    return this.notification.isOk();
  }

  isInfoNotification = (): boolean => {
    return this.notification.isInfo();
  }

  isWarningNotification = (): boolean => {
    return this.notification.isWarning();
  }

  isErrorNotification = (): boolean => {
    return this.notification.isError();
  }

  showHeader = (): boolean => {
    return this.notification.showHeader();
  }

  showFooter = (): boolean => {
    return this.notification.showFooter();
  }

  ngOnChanges = () => { };
}
