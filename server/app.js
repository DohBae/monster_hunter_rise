// declarations
require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes import
const monsterRoutes = require('./routes/monsterRoutes');

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(cors());

app.use('/monsters', monsterRoutes);


app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));