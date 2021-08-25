import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  dotenv from 'dotenv';
const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send("dddde")
})

mongoose.connect(
    process.env.uri,
    { useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is runing on port: ${PORT}`);
    })
})
.catch((err)=>{
    console.error(err)
})
