import { PripremaZaIspitCliPage } from './app.po';

describe('priprema-za-ispit-cli App', () => {
  let page: PripremaZaIspitCliPage;

  beforeEach(() => {
    page = new PripremaZaIspitCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
