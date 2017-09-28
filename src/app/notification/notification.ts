import { NotificationTypes } from './notification-types.enum';

export class Notification {
    title: String;
    text: String;
    showCancel: boolean;
    showOk: boolean;
    cancelText: String;
    okText: String;
    type: NotificationTypes;
    show: boolean;

    constructor(title: String, text: String, notificationType: NotificationTypes = NotificationTypes.Ok, show: boolean = false,
        showCancel: boolean = false, showOk: boolean = true, cancelText: String = 'Cancel', okText: String = 'Ok') {
        this.title = title;
        this.text = text;
        this.showCancel = showCancel;
        this.showOk = showOk;
        this.cancelText = cancelText;
        this.okText = okText;
        this.type = notificationType;
    }

    isOk = () => {
        return this.type ===  NotificationTypes.Ok;
    }

    isInfo = () => {
        return this.type ===  NotificationTypes.Info;
    }

    isWarning = () => {
        return this.type ===  NotificationTypes.Warning;
    }

    isError = () => {
        return this.type ===  NotificationTypes.Error;
    }

    showHeader = () => {
        return this.title !== '';
    }

    showFooter = () => {
        return this.showOk || this.showCancel;
    }

}
