if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require('express');
const clientController = require('./controllers/clientsController');
const bookingController = require('./controllers/bookingController');
const app = express()
const port = 3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }));

app.post('/register', clientController.createClient)
app.post('/login', clientController.loginClient)

app.post('/booking', bookingController.createBooking)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})