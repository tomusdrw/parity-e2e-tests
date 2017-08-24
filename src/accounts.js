// @flow

import initial from './views/initial'
import accounts from './views/accounts'
import signer from './views/signer'
import { expectUrl, URL } from './utils'

fixture('Parity Wallet Accounts').page(`${URL}/#/auth?token=${initial.token}`)

test('Sends transaction to itself', async t => {
  await expectUrl(t, `/#/accounts/`)
  await initial.dismissDialogs(t)

  await t.click(accounts.accountName)
  await expectUrl(t, '/#/accounts/0x00a329c0648769A73afAc7F9381E08FB43dBEA72')

  await t.click(accounts.transferButton)

  // Fill in the transfer details
  await t
    .typeText(accounts.transferValue, '5')
    .click(accounts.transferRecipient)
    .click(accounts.addressSelectorFirst)
    .click(accounts.sendButton)

  // Confirm in signer
  await t
    .click(signer.confirmButton)
    .expect(signer.requestStatus.textContent).contains('Transaction mined')
})
