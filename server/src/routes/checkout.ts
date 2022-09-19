// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import {Request, Response} from 'express'
import { 
  getSignature, timestamp, accessKey, salt, idempotency
 } from "../controller/utilities";
import express from 'express';
import axios from 'axios';

export const checkoutRouter = express.Router();

// getting all countries
checkoutRouter.post('/', async (req : Request, res : Response) => {
  const http_method = "post"
  const url_path = "/v1/checkout"
  console.log(req.body)
const {ewallet, amount, items} = req.body
 const body = {
    amount: amount,
    complete_payment_url: "https://chukwuemekakingsley.github.io/Success-Page/",
    complete_checkout_url: "https://chukwuemekakingsley.github.io/Success-Page/",
    cancel_checkout_url: "https://chukwuemekakingsley.github.io/Success-Page/",
    country: "SG",
    currency: "USD",
    error_payment_url: "https://chukwuemekakingsley.github.io/ErrorPage/",
    merchant_reference_id: `${amount}-2022`,
    requested_currency: "USD",
    metadata: {
        merchant_defined: true
    },
    ewallet : ewallet,
    payment_method_type_categories: [
        "card"
    ],
    // expiration: 600
    // cart_items : [items]
}
  const headers = {
        'Content-Type': 'application/json',
        salt: salt,
        timestamp: timestamp,
        signature: getSignature(body, http_method, url_path),
        access_key: accessKey,
        idempotency: idempotency
    }
   
    try {
      const request:any = {
        baseURL: "https://sandboxapi.rapyd.net",
        headers,
        url: url_path,  
        method: http_method,
        data : body
       };

    const response =  await axios(request)
     console.log(response.data)
    res.json({
          checkoutLink : response.data.data
        });
      } catch (error) {
        res.json(error);
      }

})


