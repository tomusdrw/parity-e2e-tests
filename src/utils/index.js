// @flow

import { ClientFunction } from 'testcafe'

export const URL = 'http://localhost:8280'

const getWindowLocation = ClientFunction(() => window.location.toString())

export async function expectUrl (t: TestController, expected: string) {
  const location = await getWindowLocation()
  await t.expect(location).eql(`${URL}${expected}`)
}
