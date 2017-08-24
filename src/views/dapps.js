// @flow

import { Selector } from 'testcafe'
import { expectUrl } from '../utils'

export class Dapps {
  dappsButton = Selector('a[href="#/apps"]')

  async navigate (t: TestController) {
    await t.click(this.dappsButton)
    await expectUrl(t, '/#/apps')
  }
}

export default new Dapps()
