const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const user = require('./routes/accountRoutes.js');
const employee = require('./routes/employeeRoutes');
const reg = require('./routes/mainRoutes')
const client = require('./routes/clientRoutes');
// ...
app.use(cookieParser());
app.use('/user', user);
app.use('/employee', employee);
app.use('/reg', reg);
app.use('/client', client);

app.listen(3000);