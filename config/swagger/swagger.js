const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Dice_And_Roll API',
            version: '1.0.0',
            description: 'Documentation de l&apos; api du projet Dice and Rool'
        },
        servers: [
            {
                url: "http://localhost:8000",
            }
        ]
    },
    apis: [path.join(__dirname, '../../src/router/*.js')],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;