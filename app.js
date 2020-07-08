const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const user = require('./routes/accountRoutes.js');
const employee = require('./routes/employeeRoutes');
// ...
app.use('/user', user);
app.use('/employee', employee);

app.listen(3000);