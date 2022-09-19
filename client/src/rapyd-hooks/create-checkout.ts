// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import {config } from './config';

export const createCheckoutPage =async (ewallet, amount, items) => {
    const body = {
        amount : amount,
        ewallet : ewallet,
        items : items,
    }
    const response = await fetch(`${config.rootURL}/checkout/customer`, {
        method: 'post',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    })
    const data = await response.json()
    console.log('wallet', data.checkoutLink)
    return data.checkoutLink.redirect_url
}