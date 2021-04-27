import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import posts from '../server/routers/posts.js';

const app = express();
//use port 5000 localhost
const PORT = process.env.port || 5000;

//connect to mongodb using uri
const URI = 'mongodb+srv://admin:dqu0l8Xwwn1GMRn2@cluster0.jfvso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//to use middleware,
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use( cors());

// app.get('/',(req, res) =>{
//     res.send('SUCCESS');
// });we call from posts.js for short and multiple router

app.use('/posts', posts );
//localhost:5000/

//connect to mongoose db
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Connected to DB');
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);
        })
  })
    .catch(err =>{
    console.log('err', err)
})

