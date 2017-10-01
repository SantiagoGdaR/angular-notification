import { Component } from '@angular/core';
import { NotificationTypes } from './notification/notification-types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: String = 'app';
  showFirstNotification = false;
  showSecondNotification = false;
  showThirdNotification = false;
  showFourthNotification = false;
  showFifthNotification = false;
  showSixthNotification = false;

  shortText: String = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
    sollicitudin ultrices est imperdiet id.`;

  longText: String = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis mi diam,
    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`;

  htmlText: String = `<strong>ERROR! </strong>
    sollicitudin ultrices est imperdiet id. Sed vitae leo suscipit tortor venenatis pellentesque a.`;

  closeFirstNotification = () => {
    this.showFirstNotification = false;
  }

  closeSecondNotification = () => {
    this.showSecondNotification = false;
  }

  closeThirdNotification = () => {
    this.showThirdNotification = false;
  }

  closeFourthNotification = () => {
    this.showFourthNotification = false;
  }

  closeFifthNotification = () => {
    this.showFifthNotification = false;
  }

  closeSixthNotification = () => {
    this.showSixthNotification = false;
  }

  toggleFirstNotification = () => {
    this.showFirstNotification = !this.showFirstNotification;
  }

  toggleSecondNotification = () => {
    this.showSecondNotification = !this.showSecondNotification;
  }

  toggleThirdNotification = () => {
    this.showThirdNotification = !this.showThirdNotification;
  }

  toggleFourthNotification = () => {
    this.showFourthNotification = !this.showFourthNotification;
  }

  toggleFifthNotification = () => {
    this.showFifthNotification = !this.showFifthNotification;
  }

  toggleSixthNotification = () => {
    this.showSixthNotification = !this.showSixthNotification;
  }
}
