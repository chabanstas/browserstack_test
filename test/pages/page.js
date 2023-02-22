class Page {  
     
     async waitForDisplayed(locator){
         await ((await $(locator)).waitForDisplayed());
     }

     async isEnabled(locator){
        await ((await $(locator)).isEnabled());
     }

     async click(locator){
        await $(locator).click();
    }

    async setValue(locator,text){
        await ((await $(locator)).setValue(text));
    }
 
 }
 module.exports = new Page()