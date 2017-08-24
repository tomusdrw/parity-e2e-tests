// @flow

import { Selector } from 'testcafe'
import { expectUrl } from '../utils'

const formInputs = Selector('form input')

export class Accounts {
  accountsButton = Selector('a[href="#/accounts"]')
  accountName = Selector('[class^=sectionList__item] [class^=title__title]')
  transferButton = Selector('[class^=actionbar__toolbuttons] button:first-child')
  transferRecipient = formInputs.nth(2)
  transferValue = formInputs.nth(3)
  addressSelectorFirst = Selector('[class^=accountCard__account]')
  sendButton = Selector('[class^=portal__buttonRow] button:nth-child(2)')

  async removeAccount (t: TestController, address: string, password: string) {
    await t.eval(() => {
      window.secureApi.transport.execute('parity_killAccount', address, password)
    }, {
      dependencies: { address, password }
    })
  }

  async navigate (t: TestController) {
    await t.click(this.accountsButton)
    await expectUrl(t, '/#/accounts')
  }
}

export default new Accounts()
