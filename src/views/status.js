// @flow

import { Selector } from 'testcafe'
import { expectUrl } from '../utils'

export class Status {
  statusButton = Selector('a[href="#/status"]')

  async navigate (t: TestController) {
    await t.click(this.statusButton)
    await expectUrl(t, '/#/status')
  }
}

export default new Status()
