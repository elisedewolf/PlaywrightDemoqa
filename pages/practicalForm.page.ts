// @ts-check
import { Page, Locator, expect } from "@playwright/test";;

export class PracticalFormPage {
    private readonly page: Page;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly mobile: Locator;
    private readonly dateOfBirth: Locator;
    private readonly subjects: Locator;
    private readonly currentAddress: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly submit: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.mobile = page.locator('#userNumber');
        this.dateOfBirth = page.locator('#dateOfBirthInput');
        this.subjects = page.locator('#subjectsInput');
        this.currentAddress = page.locator('#currentAddress');
        this.state = page.locator('#react-select-3-input');
        this.city = page.locator('#react-select-4-input');
        this.submit = page.locator('#submit')
    }

    async fillInFirstName(firstName: string) {
        await this.firstName.fill(firstName);
        await expect(this.firstName).toHaveValue(firstName);
    }
    async fillInLastName(lastName: string) {
        await this.lastName.fill(lastName);
        await expect(this.lastName).toHaveValue(lastName);
    }
    async fillInEmail(email: string) {
        await this.email.fill(email);
        await expect(this.email).toHaveValue(email);
    }
    async fillInGender(gender: string) {
        if (gender == 'Male') {
            await this.page.locator(`text=${gender}`).nth(1).check();
            await expect(this.page.locator(`text=${gender}`).nth(1)).toBeChecked();
        }
        else {
            await this.page.locator(`text=${gender}`).check();
            await expect(this.page.locator(`text=${gender}`)).toBeChecked();
            
        }

    }
    async fillInMobile(mobile: string) {
        await this.mobile.fill(mobile);
        await expect(this.mobile).toHaveValue(mobile);
    }
    async fillInDateOfBirth(dateOfBirth: string) {
        await this.dateOfBirth.fill(dateOfBirth);
        await this.dateOfBirth.press('Enter');
        await expect(this.dateOfBirth).toHaveValue('04 Apr 1990');
    }
    async fillInSubject(subjects: string) {
        await this.subjects.fill(subjects);
        await this.subjects.press('Enter');
        await expect(this.page.locator('.css-12jo7m5')).toHaveText(subjects);
    }
    async fillInHobbies(hobby: string) {
        await this.page.locator(`text=${hobby}`).check();
        await expect(this.page.locator(`text=${hobby}`)).toBeChecked();
    }
    async fillInCurrentAdress(currentAddress: string) {
        await this.currentAddress.fill(currentAddress);
        await expect(this.currentAddress).toHaveValue(currentAddress);
    }
    async fillInState(state: string) {
        await this.state.fill(state);
        await this.state.press('Enter');
        await expect(this.page.locator('.css-1uccc91-singleValue')).toHaveText(state);
    }
    async fillInCity(city: string) {
        await this.city.fill(city);
        await this.city.press('Enter');
        await expect(this.page.locator('.css-1uccc91-singleValue').nth(1)).toHaveText(city);
    }
    async submitForm() {
        await this.submit.click({force: true });
        await expect(this.submit).toHaveText('Submit');
    }

}