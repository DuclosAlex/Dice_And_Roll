const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Dice_And_Roll API',
            version: '1.0.0',
            description: 'Documentation de l&apos; api du projet Dice and Rool'
        },
    },
    apis: ['./routes/*.ts'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;