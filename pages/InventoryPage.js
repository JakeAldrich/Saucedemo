const { finished } = require('stream')
const BasePage = require('./BasePage.js')

const ADD_TO_CART = {id: 'add-to-cart-sauce-labs-backpack'}
const REMOVE_FROM_CART = {id: 'remove-sauce-labs-backpack'}
const CART_BADGE = {css: '.shopping_cart_badge'}
const FILTER_DROPDOWN = {css: '.product_sort_container'}
//const AtoZ_FILTER = {xpath: '//option[@value="az"'} - Bad XPATH

class InventoryPage extends BasePage{
    constructor(driver) {
      super(driver)
       
    }
  
    async itemAddedToCart() {
      await this.click(ADD_TO_CART)
      return await this.find(CART_BADGE).getText() == 1
    }

    async itemRemovedfromCart() {
      await this.click(REMOVE_FROM_CART)
      return  await this.find(ADD_TO_CART)
    }

    async filterCheck() {
        await this.click(FILTER_DROPDOWN)
        return await this.isDisplayed(FILTER_DROPDOWN)
    }
  
  }

module.exports = InventoryPage