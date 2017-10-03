import { 
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  trigger,
  transition,
  animate,
  style,
  state,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
  animations: [
    trigger('animation', [
      state('hidden', style({
        display: 'none'
      })),
      state('visible',   style({
        display: 'block'
      })),
      transition('hidden => visible', animate('100ms ease-in')),
      transition('visible => hidden', animate('100ms ease-out'))
    ])
  ]
})
export class NotificationComponent implements OnChanges {
  @Input() title = '';
  @Input() text: String;
  @Input() showCancel? = false;
  @Input() showOk? = false;
  @Input() cancelText? = 'Cancel';
  @Input() okText? = 'Ok';
  @Input() type? = 'success';
  @Input() show: boolean;
  @Input() style? = 'rounded';
  @Output() okCallback = new EventEmitter();
  @Output() closeCallback = new EventEmitter();
  @Output() cancelCallback = new EventEmitter();

  animationState: String;


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const show = changes['show'];
    if (show.currentValue !== show.previousValue) {
      this.animationState = show.currentValue ? 'visible' : 'hidden';
    }
  }

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

  isRoundedNotification = (): boolean => {
    return this.style.toLowerCase() === 'rounded';
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

  showHeaderCloseBtn= (): boolean => {
    return !(this.showOk || this.showCancel);
  }

  applyWrapper = (): boolean => {
    return !this.showHeader() && !(this.showOk || this.showCancel);
  }

  onOkClick() {
    this.okCallback.emit();
  }

  onCloseClick() {
    this.closeCallback.emit();
  }

  onCancelClick() {
    this.cancelCallback.emit();
  }
}
