const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const analiticRoutes = require('./routes/analytic');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const keys = require('./config/keys');
const passport = require('passport');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
	.then(()=> console.log('Mongo connected!'))
	.catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/analytic', analiticRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;
