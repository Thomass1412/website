var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

function tablecreate() {
  let tbl = document.createElement("table");
  let headrow = document.createElement("tr");

  let key = Object.keys(MOUNTAINS[0]);
  for (let i = 0; i < 3; i++) {
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(key[i]));
    headrow.appendChild(headCell);
  }

  tbl.appendChild(headrow);

  for (let j = 0; j < MOUNTAINS.length; j++) {
    let row = document.createElement("tr");
    let value = Object.values(MOUNTAINS[j]);
    console.log(value);
    for (let k = 0; k < 3; k++) {
      let cell = document.createElement("td");
      cell.appendChild(document.createTextNode(value[k]));
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }

  document.body.appendChild(tbl);

}
tablecreate();
