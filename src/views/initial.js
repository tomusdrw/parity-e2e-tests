// @flow

import { Selector } from 'testcafe'

export default class InitialScreens {
  token = 'aaBB-ccDD-eeFF-ggHH'
  signerInput = Selector('div[class^=connection__form] input', {
    visibilityCheck: true
  })

  syncWarningButton = Selector('[class^=syncWarning__button] button')
  tncNext = Selector('[class^=portal__buttonRow] button:not(:disabled)')
  tncCheckbox = Selector('[class^=firstRun__accept] input')
  newAccountSkip = Selector('[class^=portal__buttonRow] button:first-child')
  newAccountNext = Selector('[class^=portal__buttonRow] button:nth-child(2):not(:disabled)')

  webExtensionClose = Selector('[class^=extension__body] svg')
  tutorialClose = Selector('[class^=tooltips__buttons] button')

  async fillInSignerToken (t: TestController) {
    await t
      .typeText(this.signerInput, this.token)
      .expect(this.signerInput, this.token)
  }

  async dismissWarningDialog (t: TestController) {
    await t.click(this.syncWarningButton)
  }

  async dismissChromeExtension (t: TestController) {
    await t.click(this.webExtensionClose)
  }

  async dismissTutorial (t: TestController) {
    await t.click(this.tutorialClose)
  }

  async acceptTnc (t: TestController, skipAccountCreation: bool = true) {
    await t
      .click(this.tncNext)
      .click(this.tncCheckbox)
      .expect(this.tncCheckbox.checked).ok()
      .click(this.tncNext)
    if (skipAccountCreation) {
      await t
        .click(this.newAccountSkip)
        .click(this.tncNext)
    }
  }

  async dismissDialogs (t: TestController) {
    await this.dismissWarningDialog(t)
    await this.acceptTnc(t)
    await this.dismissChromeExtension(t)
    await this.dismissTutorial(t)
  }
}
