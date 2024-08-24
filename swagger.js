const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Définition des options de configuration pour swagger-jsdoc
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Suivi de Formation',
            version: '1.0.0',
            description: 'API pour gérer les opérateurs et leurs formations'
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Serveur local'
            }
        ]
    },
    apis: ['./routes/*.js'], // Ce chemin doit pointer vers vos fichiers de route
};

// Initialisation de swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

    