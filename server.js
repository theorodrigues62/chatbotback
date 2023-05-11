const express = require('express')
const app = express()
const port = 3000


// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Dialog API',
            description: 'Dialog API Information',
            contact: {
                name: 'Developer Name',
            },
            servers: ['http://localhost:3000'],
        },
    },
    apis: ['./routes/v1/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/api/v1', require('./routes/v1'))

app.get('*', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`) //Bonne pratique dans l'utilisation d'une API
    //res.sendfile(__dirname + 'views/404.hmtl') //Si on fait une view
})