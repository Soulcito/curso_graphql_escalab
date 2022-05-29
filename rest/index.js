const express = require('express');
const router = express.Router();

router.get('/rest', (req, res, next) => {
   res.json({
     data: "Hello guys from rest"
   });
});

module.exports = router;