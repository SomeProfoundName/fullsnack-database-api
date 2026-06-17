const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const snackRouter = require('./routers/snacks');
const orderRouter = require('./routers/orders')

const app = express();

//middlewares
app.use(logger);

// Allow the deployed client and any local origin (any port).
const allowedOrigins = ['https://fullsnack-client.pages.dev'];
app.use(cors({
  origin(origin, callback) {
    // Allow requests with no origin (e.g. curl, same-origin) and local dev.
    if (!origin || allowedOrigins.includes(origin) || /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}))

app.use(express.json());
app.use('/snacks', snackRouter);
app.use('/orders', orderRouter);

module.exports=app;