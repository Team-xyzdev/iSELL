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
checkoutRouter.get('/', async (req : Request, res : Response) => {
  const http_method = "post"
  const url_path = "/v1/checkout"

 const body = {
    amount: 100.00,
    complete_payment_url: "http://example.com/complete",
    country: "SG",
    currency: "SGD",
    error_payment_url: "http://example.com/error",
    merchant_reference_id: "1009-2022",
    requested_currency: "USD",
    metadata: {
        merchant_defined: true
    },
    ewallet : "ewallet_5cc925d5a3c8366e751aadd913745546",
    payment_method_type_categories: [
        "card"
    ]
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
          data : response.data
        });
      } catch (error) {
        res.json(error);
      }

})
