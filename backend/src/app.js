
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const { userRoutes, projectRoutes } = require('./routes/index.js')

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
    .then(() => console.log('Authenticate complete'))
    .catch(error => console.log(error));
    
db.sync({ force: true, alter: true })
    .then(() => console.log('Synchronized database'))
    .catch(error => console.log(error));

initModels();

app.get('/', (req, res) => {
    console.log('Bienvenido al server');
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', projectRoutes);

app.use(hendleError);

module.exports = app;
