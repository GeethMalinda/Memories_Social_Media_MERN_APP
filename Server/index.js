import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes  from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit:"30",extended:true}))
app.use(bodyParser.urlencoded({limit:"30",extended:true}))

app.use('/posts', postRoutes);
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



const CONNECTION_URL = 'mongodb+srv://root:1234@cluster0.gaudcge.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL,{

    //for simplicity purpose
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => app.listen(PORT,() => console.log(`SERVER RUNNING ON ${PORT}`)))
    .catch((error) => console.log(error.message))



//https://www.mongodb.com/cloud/atlas
//host our database on their cloud


