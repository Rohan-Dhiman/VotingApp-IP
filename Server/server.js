require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send("hiiiii");
});

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, () => {
        console.log(`MongoDb is connected Server is running on http://localhost:${PORT}`);
    });
}).catch(err=>{
    console.log(err.message);
})

// Start the server
