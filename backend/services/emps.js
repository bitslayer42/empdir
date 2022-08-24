const db = require('./db');

let listPerPage = 10;

function listEmps(page = 1) {
  const offset = (page - 1) * listPerPage;
  const data = db.query(`SELECT * FROM emps LIMIT ?,?`, [offset, listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function getEmpById(id) {
  const personal = db.query(`SELECT * FROM emps where employee_id = ?`, [id]);
  const supvees = db.query(`SELECT * FROM emps where supervisor_id = ?`, [id]);
  return { 
    personal,
    supvees
   }
}
module.exports = {
  listEmps,
  getEmpById
}