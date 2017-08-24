// @flow

import { Selector } from 'testcafe'
import { expectUrl } from '../utils'

export class Settings {
  settingsButton = Selector('a[href="#/settings"]')

  async navigate (t: TestController) {
    await t.click(this.settingsButton)
    await expectUrl(t, '/#/settings/views')
  }
}

export default new Settings()
