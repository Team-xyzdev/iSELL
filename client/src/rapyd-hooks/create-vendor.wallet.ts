// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import axios from "axios"
import {config } from './config';

export const createVendorWallet = async (values, user) => {
    // console.log(values, user)
    // console.log(values?.selectedCountry)
   axios.post(`${config.rootURL}/wallet`, {
       business_name : values.businessName,
       business_country : values?.selectedCountry,
       business_type : values?.businessType,
       owner_name : user?.displayName,
       owner_email : user?.email,
       createdAt: values?.createdAt
   })
}