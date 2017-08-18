import { AngularSpringBootPage } from './app.po';

describe('angular-spring-boot App', () => {
  let page: AngularSpringBootPage;

  beforeEach(() => {
    page = new AngularSpringBootPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
