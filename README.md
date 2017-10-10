# Angular Notification

Angular notification is an easy to use module to manage notifications in your app.

SOON RELEASE OF VERSION 1.0.0...

----------


## Installation

    npm install angular-ntf

## Import NotificatioModule

    Import { NotificationModule } from 'angular-ntf';


## Api

Angular Notifications allows multiple configuration settings through component properties:


**[text] String** = Mandatory - Is the text of the notification. It can contain html code.

**[show] boolean** = Mandatory. Sets if the visibility state of the notifcation. Used to toogle the visibility state hidden if false, visible if true.

**[title] String** = Optional - If a value is provided the header section of the notification is shown with the provided title

**[showOk] boolean** = Optional - False by default. Shows or hides the Ok button.

**[okText] String** = Optional - 'Ok' by default. Sets an alternative text to the Ok button.

**[showCancel] boolean** = Optional - False by default. Shows or hides the Cancel button.

**[cancelText] String** = Optional - 'Cancel' by default. Sets an alternative text to the Cancel button.

**[type] String** = Optional - 'success' by default. Sets the type of notification. Available options: ['success', 'info', 'warning', 'error'];

**[style] String** = Optional - 'rounded' by default. Sets the style of the notification. Available options: ['rounded', 'square'].

**[okCallback] EventEmitter()** - Sets the callback for the ok button.

**[closeCallback] EventEmitter()** - Sets the callback for the close button

**[cancelCallback] EventEmitter()** - Sets the callback for the cancel button.

## Examples
For the examples a medium post is going to be created.

