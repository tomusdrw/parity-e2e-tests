// @flow

import home from './views/home'
import initial from './views/initial'
import accounts from './views/accounts'
import newAccount from './views/newAccount'
import { expectUrl, URL } from './utils'

fixture('Parity Wallet Home').page(`${URL}/#/auth?token=${initial.token}`)

test.page(`${URL}/`)(
  'Asks for token and loads the home page if inserted correctly.',
  async t => {
    await initial.fillInSignerToken(t)
    await expectUrl(t, `/#/accounts/`)
  }
)

test('Loads the token from URL and redirects to accounts page.', async t => {
  await expectUrl(t, `/#/accounts/`)
})

test('Loads the Home Page', async t => {
  await expectUrl(t, `/#/accounts/`)
  await initial.dismissDialogs(t)
  await home.navigate(t)

  await t.expect(home.webappsInput).ok()
  await t.expect(home.recentDappsTitle.textContent).eql('Recent Dapps')
  await t.expect(home.recentAccountsTitle.textContent).eql('Recent Accounts')
})

test('Creates a new account from welcome screen', async t => {
  await initial.dismissWarningDialog(t)
  await initial.acceptTnc(t, false)
  // Fill in account details
  await t
    .typeText(newAccount.accountNameInput, 'My First Account')
    .typeText(newAccount.passwordHintInput, 'a')
    .typeText(newAccount.passwordInput, 'a')
    .typeText(newAccount.repeatPasswordInput, 'a')
    .click(initial.newAccountNext)

  const phrase = await newAccount.recoveryPhrase.value
  const address = await newAccount.address.value

  await t
    .typeText(newAccount.phraseConfirmation, 'I have written down the phrase')
    .click(initial.newAccountNext)

  await t
    .typeText(newAccount.confirmRecoveryPhrase, phrase)
    .click(initial.newAccountNext)
    .click(initial.tncNext)

  // Make sure the account is displayed on the list
  await t.expect(accounts.accountName.textContent).eql('MY FIRST ACCOUNT')

  // Remove it at the end
  await accounts.removeAccount(t, address, 'a')
})
