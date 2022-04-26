const { Builder } = require('selenium-webdriver')
const assert = require('assert')

const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')


require("./LoginTest")

describe('Inventory', function() {
    this.timeout(30000)
    let driver
    let login
    let inventory
    
   // Launch the saucedemo site and login before executing tests on the inventory items
    before(async function() {
        driver = await new Builder().forBrowser('firefox').build()
        //driver = new Builder().forBrowser('chrome').build();

        login = new LoginPage(driver)
        inventory = new InventoryPage(driver)
        await login.load()
        await login.authenticate('standard_user', 'secret_sauce')
    })
    after(async function() {
        await driver.quit()
    })
    it('test adding item to shopping cart', async function() {
        assert (await inventory.itemAddedToCart(), 'Item not added to cart')
    }),
    it('test removing item from shopping cart', async function() {
        assert (await inventory.itemRemovedfromCart(), 'Item not removed from cart')
    }),
    it('test if the filter exists', async function() {
       assert (await inventory.filterCheck(), 'filter does not appear')
    })   
})