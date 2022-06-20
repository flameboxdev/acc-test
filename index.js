const a = require('./a.json');
const e = require('express');
let str = '96987566';


const app = e();

app.listen(3000);
app.get('/update', (req, res) => {
  res.send(str);
});

for (let i = 1; i < 19; i++) {
  console.log(a[i]);
  console.log(a[i][0]);
  if (a[i][0] === '*') {
    str += a[i];
  }
}
console.log(str);
