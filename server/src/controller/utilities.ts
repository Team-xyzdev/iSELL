// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import crypto from 'crypto-js';
import dotenv from 'dotenv';

// config
dotenv.config();

// access keys headers
export const accessKey = process.env.accessKey;
export const secretKey = process.env.secretKey;
// export const url_path = "/v1/user";                                                              
// export const http_method = "post";                                                                                                      
export const salt = crypto.lib.WordArray.random(12);    
export const idempotency = new Date().getTime().toString();
export const timestamp = Math.round(new Date().getTime() / 1000);

export const getSignature = (body, http_method, url_path) => {
    
    const to_sign =
      http_method + url_path + salt + timestamp + accessKey + secretKey + JSON.stringify(body);
    let signature = crypto.enc.Hex.stringify(
      crypto.HmacSHA256(to_sign, secretKey)
    );
    signature = crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(signature));
    return signature;
 }





