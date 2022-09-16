// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import {Request, Response} from 'express'
import { 
  getSignature, timestamp, accessKey, salt, idempotency
 } from "../controller/utilities";
import express from 'express';
import axios from 'axios';

export const createWalletRouter = express.Router();

// getting all countries
createWalletRouter.post('/', async (req : Request, res : Response) => {
  const http_method:string = "post"
  const url_path:string = "/v1/user"

  const body:Object = {
    first_name: 'Jon',
    last_name: 'Doe',
    ewallet_reference_id: 'John-Doe-02552020',
    metadata: {
      merchant_defined: true
    },
    type: 'company',
    contact: {
      phone_number: '+14155551234',
      email: 'johndoe@rapyd.net',
      first_name: 'John',
      last_name: 'Doe',
      mothers_name: 'Jane Smith',
      contact_type: 'business',
      address: {
        name: 'John Doe',
        line_1: '123 Main Street',
        line_2: '',
        line_3: '',
        city: 'Anytown',
        state: 'NY',
        country: 'US',
        zip: '12345',
        phone_number: '+14155551234',
        metadata: { number: 2 },
        canton: '',
        district: ''
      },
      identification_type: 'PA',
      identification_number: '1234567890',
      date_of_birth: '11/22/2000',
      country: 'US',
      metadata: {
        merchant_defined: true
      },
      business_details: {
        entity_type: 'association',
        name: 'Four Star Professional Services',
        registration_number: '4234567779',
        industry_category: 'company',
        industry_sub_category: 'home services',
        address: {
          name: 'John Doe',
          line_1: '1234 Main Street',
          line_2: 'Suite 1200',
          line_3: '',
          city: 'Anytown',
          state: 'NY',
          country: 'US',
          zip: '10101',
          phone_number: '14155557779',
          metadata: {
            merchant_defined: true
          }
        }
      }
    }
  };
  const headers: Object = {
        'Content-Type': 'application/json',
        salt: salt,
        timestamp: timestamp,
        signature: getSignature(body, http_method, url_path),
        access_key: accessKey,
        idempotency: idempotency
    }
   
  try {
      const request:Object = {
        baseURL: "https://sandboxapi.rapyd.net",
        headers,
        url: url_path,  
        method: http_method,
        data : body
       };

    const response =   await axios(request)
     console.log(response.data)
    res.json({
          data : response.data
        });
      } catch (error) {
        res.json(error);
      }

})
