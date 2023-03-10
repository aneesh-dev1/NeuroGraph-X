import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongoDb/connect.js'
import postRoutes from './routes/postRoute.js'
import appRoutes from './routes/appRoutes.js'

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/app',appRoutes);

app.get('/',async(req,res) => res.send('<h1>Hello there</h1>'))

const startServer = async() => {

    try {
        connectDB(process.env.MONGO_URL);
        app.listen(8000, (req,res) => console.log("Server running at http://localhost:8000"))
    } catch (error) {
        console.log(error);
    }



}
startServer();