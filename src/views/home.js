// @flow

import { Selector } from 'testcafe'

export default class Home {
  homeButton = Selector('a[href="#/home"]')
  webappsInput = Selector('input[class^=urls__input]')
  recentDappsTitle = Selector('[class^=dapps__dapps] h3[class^=title__title]')
  recentAccountsTitle = Selector('[class^=accounts__accounts] h3[class^=title__title]')

  async navigate (t: TestController) {
    await t.click(this.homeButton)
  }
}
