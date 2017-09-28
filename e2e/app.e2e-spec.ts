import { AngularNotificationPage } from './app.po';

describe('angular-notification App', () => {
  let page: AngularNotificationPage;

  beforeEach(() => {
    page = new AngularNotificationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
