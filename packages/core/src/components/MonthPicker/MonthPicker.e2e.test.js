/* global driver */
import { ROOT_URL } from '../../helpers/e2e/constants';

import assertNoAxeViolations from '../../helpers/e2e/assertNoAxeViolations';
import { getElementByClassName } from '../../helpers/e2e';

const rootURL = `${ROOT_URL}/example/components.month-picker.react/`;

describe('Month Picker component', () => {
  it('Should render', async() => {
    await driver.get(rootURL);

    const el = await getElementByClassName('ds-c-month-picker');
    expect(el).toBeTruthy();
  });

  it('Should have no accessibility violations', async() => {
    await assertNoAxeViolations(rootURL);
  });
});
