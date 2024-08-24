const express = require('express');
const userRoutes = require('./routes/user.routes')
const habilitationRoutes = require('./routes/habilitation.routes')
const formationRoutes = require('./routes/formation.routes')
const swaggerSetup = require('./swagger');
const cors = require('cors');
const app = express()
require('dotenv').config({ path: './config/.env' })
require('./config/db')



// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173'  // Autoriser uniquement votre domaine React
}));


// Intégration de Swagger
swaggerSetup(app);

//Routes
app.use('/api/user', userRoutes)
app.use('/api/habilitation', habilitationRoutes)
app.use('/api/formation', formationRoutes)


//End
app.listen(process.env.PORT, () => {
    console.log(`Connecter sur le port ${process.env.PORT}`)
})

