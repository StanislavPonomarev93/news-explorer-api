const router = require('express').Router();
const rateLimit = require('express-rate-limit');

router.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: 'Exceeded the limit' }
}));

module.exports = router;