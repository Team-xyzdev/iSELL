// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant modules
import express, {Express, Response, Request} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

// using .env 
dotenv.config();

// start an express server
const app: Express = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express());
app.use(cors());
app.use(morgan('combined'));



//root url
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json('Isell API is running 🗺')
})

app.listen(port ,  () => {
    console.log(`iSELL API is listening on port ${port}`)
})
