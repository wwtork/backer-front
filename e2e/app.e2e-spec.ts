import { BackerFrontPage } from './app.po';

describe('backer-front App', () => {
  let page: BackerFrontPage;

  beforeEach(() => {
    page = new BackerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
