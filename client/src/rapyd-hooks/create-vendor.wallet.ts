// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import axios from "axios"
import {config } from './config';
// import { setVendorWallet } from "../store/vendor-wallet/wallet.reducer";
// import { useDispatch } from "react-redux";

export const createVendorWallet = async (values, user) => {
    // const dispatch = useDispatch();
    // console.log(values, user)
    // console.log(values?.selectedCountry)
    const body = {
        business_name : values.businessName,
        business_country : values?.selectedCountry,
        business_type : values?.businessType,
        owner_name : user?.displayName,
        owner_email : user?.email,
        createdAt: values?.createdAt
    }
    const response = await fetch(`${config.rootURL}/wallet`, {
        method: 'post',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    })
    const data = await response.json()
    console.log('wallet', data.wallet)
    return data.wallet
//   const response : any = await axios.post(`${config.rootURL}/wallet`, {
//        business_name : values.businessName,
//        business_country : values?.selectedCountry,
//        business_type : values?.businessType,
//        owner_name : user?.displayName,
//        owner_email : user?.email,
//        createdAt: values?.createdAt
//    }).then( (response) => {
//        console.log(response.data.wallet, 'wallet')
//      return response.data.wallet
//     //  callback()
//    }).catch((error) => {
//        console.log(error)
//    })
}