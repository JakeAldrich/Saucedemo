const { finished } = require('stream')
const BasePage = require('./BasePage.js')

const USERNAME_INPUT = { id: 'user-name' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { id: 'login-button' }
const LOGIN_FAILURE = { css: '.error-message-container.error'}
const LOGIN_BOX= { css: '.login-box'}
const FAILURE_MESSAGE = {css: 'h3'}

//const MENU = { id: 'react-burger-menu-btn'} - REMOVED due to not being on Login Page
//const LOGOUT = {id: 'logout_sidebar_link'} - REMOVED due to not being on Login Page


class LoginPage extends BasePage{
  constructor(driver) {
    super(driver)

  }

  async load() {
    await this.driver.get('https://www.saucedemo.com/')
    if (await !this.isDisplayed(LOGIN_BOX))
        throw new Error('Login box failed to load')
  }

  async authenticate(username, password) {
    await this.type(USERNAME_INPUT, username)
    await this.type(PASSWORD_INPUT, password)
    await this.click(SUBMIT_BUTTON)
  }

  async loginSuccess() {
    return await this.getCurrentUrl() === 'https://www.saucedemo.com/inventory.html'
  
  }
  async loginFailure() {
    console.log("Successfully failed to login due to: " + await this.find(FAILURE_MESSAGE).getText())
    return await this.isDisplayed(LOGIN_FAILURE)
}
 
}

module.exports = LoginPage