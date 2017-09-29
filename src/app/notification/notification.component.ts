import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnChanges {
  @Input() title = '';
  @Input() text: String;
  @Input() showCancel? = false;
  @Input() showOk? = false;
  @Input() cancelText? = 'Cancel';
  @Input() okText? = 'Ok';
  @Input() type? = 'success';
  @Input() show? = true;

  constructor() { }

  isOkNotification = (): boolean => {
    return this.type.toLowerCase() === 'success';
  }

  isInfoNotification = (): boolean => {
    return this.type.toLowerCase() === 'info';
  }

  isWarningNotification = (): boolean => {
    return this.type.toLowerCase() === 'warning';
  }

  isErrorNotification = (): boolean => {
    return this.type.toLowerCase() === 'error';
  }

  showHeader = (): boolean => {
    return this.title !== '';
  }

  showFooter = (): boolean => {
    return this.showOk || this.showCancel;
  }

  showContainerCloseBtn = (): boolean => {
    return !this.showHeader() && !(this.showOk || this.showCancel);
  }

  ngOnChanges = () => { };
}
