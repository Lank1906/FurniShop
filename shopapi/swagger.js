const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Basic Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Furni API with Swagger',
    version: '1.0.0',
    description: 'List of Furni Apis',
  },
  servers: [
    {
      url: 'https://localhost:5000',
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ['./server.js','./routers/*.js'],
};

// Initialize swagger-jsdoc
const specs = swaggerJsdoc(options);

module.exports = specs;