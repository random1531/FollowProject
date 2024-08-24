const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
    apis: ['./documentation api/doc.js'], // Assurez-vous que le chemin est correct
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
