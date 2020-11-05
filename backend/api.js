//api.js

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');

var con = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  port: '3306',
  password: 'somePassword',
  database: 'mean',
  charset: 'utf8',
});

console.log(`\n>>>>>>>>>>>>>>>>>>>>> SQL HOST : ${process.env.HOST} \n`);

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

// initial connectiond
con.connect(function (err) {
  if (err) console.log(err);
});

router.get('/', (req, res) => {
  return res.status(200).json({ app: 'Running' });
});

// our simple get /jobs API
router.get('/jobs', cors(corsOptions), (req, res) => {
  try {
    con.query('SELECT * FROM jobs', function (err, result, fields) {
      if (err) res.send(err);
      console.log(result);
      return res.status(200).json(result);
    });
  } catch (error) {
    return res.json({ error });
  }
});

module.exports = router;
