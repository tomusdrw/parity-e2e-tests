// @flow

import { Selector } from 'testcafe'

export default class Accounts {
  accountName = Selector('[class^=sectionList__item] [class^=title__title]')

  async removeAccount (t: TestController, address: string, password: string) {
    await t.eval(() => {
      window.secureApi.transport.execute('parity_killAccount', address, password)
    }, {
      dependencies: { address, password }
    })
  }
}
