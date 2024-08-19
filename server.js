const express = require('express');
require('dotenv').config({ path: './config/.env' })
const userRoutes = require('./routes/user.routes')
const bodyParser = require('body-parser')
require('./config/db')
const cors = require('cors');
const app = express()



// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173'  // Autoriser uniquement votre domaine React
}));

//Routes
app.use('/api/user', userRoutes)

//End
app.listen(process.env.PORT, () => {
    console.log(`Hello sur le ${process.env.PORT}`)
})

