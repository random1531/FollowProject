const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' })


mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qdnv9.mongodb.net/suivideformation`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connected to db'))
    .catch((err) => console.log("Failed to connect", err));
