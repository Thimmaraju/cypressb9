

describe('Demo of Use of JS', () => {


    it('Use of JS in cypress', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('button[type="button"]').eq(13).click()

        cy.get('button[type="button"]').eq(14).click()

        cy.get(" table > tbody > tr:nth-child(2) > td:nth-child(3) > strong").then($txt => {
            var totalprice = $txt.text()
            var totapricenumber = Number(totalprice)
            cy.log(totapricenumber)
            cy.get('img[alt="Cart"]').click()

            cy.get('div.cart > div.cart-preview.active > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(1) > div.product-total > p.amount').then($txt => {
                var firstitemprice = Number($txt.text())

                cy.get('div.cart > div.cart-preview.active > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > div.product-total > p.amount').then($txt => {
                    var seconditemprice = Number($txt.text())
                    const totalamount = firstitemprice + seconditemprice
                    expect(totapricenumber).to.equal(totalamount)
                })
            })

        })


    })

})