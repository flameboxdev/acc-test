const a = require('./a.json');
const e = require('express');
let str = '0003698756';
const b = 6;

const app = e();

app.listen(3000);
app.get('/update', (req, res) => {
  res.send(str);
});

for (let i = 1; i < b + 1; i++) {
  console.log(a[i]);
  console.log(a[i][0]);
  if (a[i][0] === '*') {
    str += a[i];
  }
}
console.log(str);
