const loginPage = require('../pages/login.page.js');
const mainPage = require('../pages/main.page.js');

describe('First test', () => {
    it('isEnabled button Webview', async () => {
        await mainPage.waitForDisplayWebview();
        await mainPage.isEnabledWebview();
        await browser.pause(1500);
    });
  
    it('should sign up unregisterd user with valid details', async () => {
        await loginPage.goToLoginPage();
        await loginPage.setValidEmail();
        await loginPage.setValidPass();
        await loginPage.clickLoginCongirmBtn();
        expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')).toHaveTextContaining('Please enter a valid email address');
    });

    it('should sign up with invalid email', async () => {
        await loginPage.goToLoginPage();
        await loginPage.setInvalidEmail();
        await loginPage.setValidPass();
        await loginPage.clickLoginCongirmBtn();
        expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')).toHaveTextContaining('Please enter a valid email address');
    });

    it('should sign up with invalid password', async () => {
        await loginPage.goToLoginPage();
        await loginPage.setValidEmail();
        await loginPage.setInvalidPass();
        await loginPage.clickLoginCongirmBtn();
        expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]')).toHaveTextContaining('Please enter at least 8 characters');
    });

    it('should sign up with empty fields', async () => {
        await loginPage.goToLoginPage();
        await loginPage.clickLoginCongirmBtn();
        expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')).toHaveTextContaining('Please enter a valid email address');
  });
});