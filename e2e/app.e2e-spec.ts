import { RxjsDemoPage } from './app.po';

describe('rxjs-demo App', () => {
  let page: RxjsDemoPage;

  beforeEach(() => {
    page = new RxjsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
