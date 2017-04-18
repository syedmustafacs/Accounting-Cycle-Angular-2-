import { IadAmsSecB2017Page } from './app.po';

describe('iad-ams-sec-b2017 App', () => {
  let page: IadAmsSecB2017Page;

  beforeEach(() => {
    page = new IadAmsSecB2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
