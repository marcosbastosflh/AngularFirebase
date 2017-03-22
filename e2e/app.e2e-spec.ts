import { AngularEstudoPage } from './app.po';

describe('angular-estudo App', () => {
  let page: AngularEstudoPage;

  beforeEach(() => {
    page = new AngularEstudoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
