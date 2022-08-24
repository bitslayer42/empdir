const express = require('express');
const router = express.Router();
const emps = require('../services/emps');

// GET emp listing.
router.get('/', function(req, res, next) {
  try {
    res.json(emps.listEmps(req.query.page));
  } catch(err) {
    console.error(`Error while getting emps `, err.message);
    next(err);
  }
});

// GET one emp by ID
router.get('/:emp_id', function(req, res, next) {
  try {
    res.send(emps.getEmpById(req.params.emp_id)); //
  } catch(err) {
    console.error(`Error while getting emps `, err.message);
    next(err);
  }
});

module.exports = router;