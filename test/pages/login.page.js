const page = require('./page');

const Login_btn = '//android.widget.Button[@content-desc="Login"]/android.widget.TextView[1]';
const input_email = '//android.widget.EditText[@content-desc="input-email"]';
const input_pass = '//android.widget.EditText[@content-desc="input-password"]';
const login_confirm_btn = '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup';

class LoginPage { 

        async goToLoginPage(){
            await page.click(Login_btn);
        }

        async setValidEmail(){
            await page.setValue(input_email, 'test1@test.com\n');
        }

        async setValidPass(){
            await page.setValue(input_pass, 'TEst!1pass\n');
        }

        async setInvalidEmail(){
            await page.setValue(input_email, 'testtestcom\n');
        }

        async setInvalidPass(){
            await page.setValue(input_pass, '@1+#$^\n');
        }

        async clickLoginCongirmBtn(){
            await page.click(login_confirm_btn);
        }
 }
module.exports = new LoginPage()