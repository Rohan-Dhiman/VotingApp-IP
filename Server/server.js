require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const candidateRoutes = require('./Routes/routes.candidates');
const electionRoutes = require('./Routes/routes.election');
const voterRoutes = require('./Routes/routes.voter');
const superAdminRoutes = require('./Routes/routes.superAdmin');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


app.use('/api/v1/candidates', candidateRoutes);
app.use('/api/v1/elections', electionRoutes);
app.use('/api/v1/voter', voterRoutes);
app.use('/api/v1/', superAdminRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, () => {
        console.log(`MongoDb is connected Server is running on http://localhost:${PORT}`);
    });
}).catch(err=>{
    console.log(err.message);
})

// Start the server
