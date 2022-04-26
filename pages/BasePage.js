// Interface for common functions in testing
class BasePage {
    constructor(driver) {
      this.driver = driver
    }
  
    find(locator) {
      return this.driver.findElement(locator)
    }

    async getCurrentUrl() {
      return this.driver.getCurrentUrl()
    }
  
    async click(locator) {
      await this.find(locator).click()
    }
  
    async type(locator, inputText) {
      await this.find(locator).sendKeys(inputText)
    }
  
    async isDisplayed(locator) {
      return await this.find(locator).isDisplayed()
    }
  }
  
  module.exports = BasePage
  