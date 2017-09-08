import { TooltestPage } from './app.po';

describe('tooltest App', () => {
  let page: TooltestPage;

  beforeEach(() => {
    page = new TooltestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
