// @flow

import { Selector } from 'testcafe'
import { expectUrl } from '../utils'

export class Signer {
  signerButton = Selector('a[href="#/signer"]')
  confirmButton = Selector('[class^=transactionPendingFormConfirm] button')
  requestStatus = Selector('[class^=requests__status]')

  async navigate (t: TestController) {
    await t.click(this.signerButton)
    await expectUrl(t, '/#/signer')
  }
}

export default new Signer()
