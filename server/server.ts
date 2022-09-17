// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import express, {Express, Response, Request} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import {checkoutRouter} from './src/routes/checkout';
import {createWalletRouter} from './src/routes/wallet';


// using .env 
dotenv.config();

// start an express server
const app: Express = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.set('json spaces', 4);


//create checkout for unique customer
app.use('/checkout/customer', checkoutRouter);

// create wallet for vendors
app.use('/wallet', createWalletRouter);

//root url
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json('Isell API is running 🗺')
})


app.listen(port ,  () => {
    console.log(`iSELL API is listening on port ${port}`)
})