require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const candidateRoutes = require('./Routes/candidateRoutes');
const ElectionRoutes = require('./Routes/routes.election');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send("hiiiii");
});

app.use('/api/v1/candidates', candidateRoutes);
app.use('/api/v1/elections', ElectionRoutes);


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, () => {
        console.log(`MongoDb is connected Server is running on http://localhost:${PORT}`);
    });
}).catch(err=>{
    console.log(err.message);
})

// Start the server
