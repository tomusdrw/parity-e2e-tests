// @flow

import Home from './views/home'
import Initial from './views/initial'
import { expectUrl, URL } from './utils'

const home = new Home()
const initial = new Initial()

fixture('Parity Wallet Home').page(`${URL}/#/auth?token=${initial.token}`)

test.page(`${URL}/`)(
  'Asks for token and loads the home page if inserted correctly.',
  async t => {
    await initial.fillInSignerToken(t)
    await expectUrl(t, `${URL}/#/accounts/`)
  }
)

test('Loads the token from URL and redirects to accounts page.', async t => {
  await expectUrl(t, `${URL}/#/accounts/`)
})

test('Loads the Home Page', async t => {
  await expectUrl(t, `${URL}/#/accounts/`)
  await initial.dismissDialogs(t)
  await home.navigate(t)
  await expectUrl(t, `${URL}/#/home`)

  await t.expect(home.webappsInput).ok()
  await t.expect(home.recentDappsTitle.textContent).eql('Recent Dapps')
  await t.expect(home.recentAccountsTitle.textContent).eql('Recent Accounts')
})
