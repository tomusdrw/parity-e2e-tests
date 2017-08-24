// @flow

import { Selector } from 'testcafe'

const formInputs = Selector('form input')
const createAccountInputs = Selector('[class^=createAccount__description] input')

export class NewAccount {
  accountNameInput = formInputs.nth(2)
  passwordHintInput = formInputs.nth(3)
  passwordInput = formInputs.nth(4)
  repeatPasswordInput = formInputs.nth(5)
  address = createAccountInputs.nth(0)
  recoveryPhrase = createAccountInputs.nth(1)
  phraseConfirmation = createAccountInputs.nth(2)
  confirmRecoveryPhrase = createAccountInputs.nth(1)
}
export default new NewAccount()
