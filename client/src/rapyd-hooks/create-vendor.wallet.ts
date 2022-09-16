import axios from "axios"
import {config } from './config';

export const createVendorWallet = async () => {
   axios.post(`${config.rootURL}/wallet`)
}