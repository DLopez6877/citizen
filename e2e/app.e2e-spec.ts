import { CitizenshipPage } from './app.po';

describe('citizenship App', () => {
  let page: CitizenshipPage;

  beforeEach(() => {
    page = new CitizenshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
