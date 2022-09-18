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
 
  const {
        owner_email, 
        owner_name, createdAt,business_country,
        business_name, business_type } = req.body;
 

  const body= {
    first_name: owner_name,
    last_name: owner_name,
    ewallet_reference_id: `${owner_name}-${createdAt}`,
    metadata: {
      merchant_defined: true
    },
    type: 'company',
    contact: {
      phone_number: '+14155551234',
      email: owner_email,
      first_name: owner_name,
      last_name: owner_name,
      mothers_name: 'kin',
      contact_type: 'business',
      address: {
        name: owner_name,
        line_1: '123 Main Street',
        line_2: '',
        line_3: '',
        city: 'Anytown',
        state: 'NY',
        country: business_country,
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
        name: business_name,
        registration_number: '4234567779',
        industry_category: 'company',
        industry_sub_category: business_type,
        address: {
          name: owner_name,
          line_1: '1234 Main Street',
          line_2: 'Suite 1200',
          line_3: '',
          city: 'Anytown',
          state: 'NY',
          country: business_country,
          zip: '10101',
          phone_number: '14155557779',
          metadata: {
            merchant_defined: true
          }
        }
      }
    }
  };

  const headers = {
        'Content-Type': 'application/json',
        salt: salt,
        timestamp: timestamp,
        signature: getSignature(body, http_method, url_path),
        access_key: accessKey,
        idempotency: idempotency
    }
   
  try {
    const data = req.body
    console.log(data, 'inside')
      const request:any = {
        baseURL: "https://sandboxapi.rapyd.net",
        headers,
        url: url_path,  
        method: http_method,
        data : body
       };

    const response = await axios(request)
     console.log(response.data)
    res.json({
          wallet : response.data.data.id
        });
      } catch (error) {
        res.json(error);
      }

})
