const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const snackRouter = require('./routers/snacks');
const orderRouter = require('./routers/orders')

const app = express();

//middlewares
app.use(logger);

// Allow the deployed client (incl. Cloudflare Pages preview subdomains)
// and any local origin (any port).
const allowedOriginPatterns = [
  // Production client and its *.pages.dev preview deployments.
  /^https:\/\/([a-z0-9-]+\.)*fullsnack-client\.pages\.dev$/,
  // Local development on any port.
  /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/,
];
app.use(cors({
  origin(origin, callback) {
    // Allow requests with no origin (e.g. curl, same-origin requests).
    if (!origin || allowedOriginPatterns.some((pattern) => pattern.test(origin))) {
      return callback(null, true);
    }
    return callback(new Error(`Not allowed by CORS: ${origin}`));
  }
}))

app.use(express.json());
app.use('/snacks', snackRouter);
app.use('/orders', orderRouter);

module.exports=app;