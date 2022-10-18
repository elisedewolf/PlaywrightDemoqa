// @ts-check
import test, { expect } from "@playwright/test";
import { PracticalFormPage } from "../pages/practicalForm.page"
test.beforeEach(async ({ page }) => {
  await page.goto('/automation-practice-form');
});

test.describe('Fill in practice form sumit and check submit results ', () => {
  test('Fill in Pratice form', async ({ page }) => {
    const practicalFormPage = new PracticalFormPage(page);
    await practicalFormPage.fillInFirstName('jef');
    await practicalFormPage.fillInLastName('janssens');
    await practicalFormPage.fillInEmail('jefjanssens@gmail.com');
    await practicalFormPage.fillInGender('Male');
    await practicalFormPage.fillInMobile('0474232375');
    await practicalFormPage.fillInDateOfBirth('04/04/1990');
    await practicalFormPage.fillInSubject('Hindi');
    await practicalFormPage.fillInHobbies('Sports');
    await practicalFormPage.fillInCurrentAdress('hoogstraat 21, 1930 zaventem');
    await practicalFormPage.fillInState('NCR');
    await practicalFormPage.fillInCity('Delhi');
    await practicalFormPage.submitForm();

  });

  test.afterEach(async ({ page }) => {
    await page.close();

  });



});

