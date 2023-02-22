const page = require('./page');

const Webview_btn = '//android.widget.Button[@content-desc="Webview"]/android.widget.TextView[1]';

class MainPage { 
    
        async waitForDisplayWebview(){
            await page.waitForDisplayed(Webview_btn);
        }

        async isEnabledWebview(){
            await page.isEnabled(Webview_btn);
        }

        async setInvalidEmail(){
            await input_email.setValue('testtestcom\n');
            await input_pass.setValue('TEst!1pass\n');
        }

        async setInvalidPass(){
            await input_email.setValue('testtestcom\n');
            await input_pass.setValue('@1+#$^\n');
        }

        async clickLoginCongirmBtn(){
            await login_confirm_btn.click();
        }
 }
module.exports = new MainPage()