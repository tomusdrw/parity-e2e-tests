// @flow

import { Selector } from 'testcafe'
import { expectUrl } from '../utils'

export class AddressBook {
  addressBookButton = Selector('a[href="#/addresses"]')

  async navigate (t: TestController) {
    await t.click(this.addressBookButton)
    await expectUrl(t, '/#/addresses')
  }
}

export default new AddressBook()
