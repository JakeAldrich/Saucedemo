const { Builder } = require('selenium-webdriver')
const assert = require('assert')

const LoginPage = require('../pages/LoginPage')

var loginData

const fs = require('fs')
fs.readFile('test/loginData.json', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    loginData = JSON.parse(data);
})

//Start of tests for login page
describe('Login', function() {
    this.timeout(30000)
    let driver
    let login

    // Before each login test, launch a new browser
    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build()
        login = new LoginPage(driver)
    
        await login.load()
    })
    afterEach(async function() {
        await driver.quit()
    })
    it('Login with valid credentials', async function() {
    await login.authenticate(loginData['usernames'][0].accepted[0], loginData.password)
    assert(await login.loginSuccess(), 'Login was unsuccessful')
    
}),
    it('Login with invalid credentials', async function() {
    await login.authenticate(loginData['usernames'][0].rejected[0], loginData.password)
    assert(await login.loginFailure(), 'Login was successful')
    })
})

