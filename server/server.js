const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/light", (req, res, next) => {
  //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  const { spawn } = require('child_process');
  const pyProcess = spawn('python', ['../pythonCode/test.py', "light"]);

  pyProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    console.log(req.params);
    res.status(200);
    res.json({light: true, buzz: false, stdout: data.toString()});
    res.end();
  });
});

app.get("/buzz", (req, res, next) => {
  //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  const { spawn } = require('child_process');
  const pyProcess = spawn('python', ['../pythonCode/test.py', "buzz"]);

  pyProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    console.log(req.query);
    res.status(200);
    res.json({light: false, buzz: true, stdout: data.toString()});
    res.end();
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});