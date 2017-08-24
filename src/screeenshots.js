// @flow

import initial from './views/initial'
import status from './views/status'
import home from './views/home'
import accounts from './views/accounts'
import addressBook from './views/addressBook'
import dapps from './views/dapps'
import signer from './views/signer'
import settings from './views/settings'
import { URL } from './utils'

fixture('Parity Wallet Screenshots').page(`${URL}/#/auth?token=${initial.token}`)

test.only('Navigate and shoot', async t => {
  await initial.dismissDialogs(t)
  await status.navigate(t)
  await t.takeScreenshot('status.png')
  await home.navigate(t)
  await t.takeScreenshot('home.png')
  await accounts.navigate(t)
  await t.takeScreenshot('accounts.png')
  await addressBook.navigate(t)
  await t.takeScreenshot('addressbook.png')
  await dapps.navigate(t)
  await t.takeScreenshot('dapps.png')
  await signer.navigate(t)
  await t.takeScreenshot('signer.png')
  await settings.navigate(t)
  await t.takeScreenshot('settings.png')
})
