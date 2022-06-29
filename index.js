const a = require('./access.json');
const l = require('./list.json');
const e = require('express');

const app = e();

app.listen(3000);
app.get('/update', (req, res) => {
  res.send(str());
});

const str = () => {
  let s = '';
  for (let i = 1; i < 20; i++) if (a[i] == 1) s += l[i] + '*';
  s += '#';
  for (let i = 20; i < 80; i++) if (a[i] == 1) s += l[i] + '*';
  //console.log(s);
  return s;
}
//console.log(str());
