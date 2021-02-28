//const { spawn } = require('child_process');
const express = require('express');

/*const runScript = () => {
  const pythonProcess = spawn('python', ['../pythonCode/test.py', "Bryan"]);
  
  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  return "Done!";
}*/

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/url", (req, res, next) => {
  //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  const { spawn } = require('child_process');
  const pyProcess = spawn('python', ['../pythonCode/main.py', "buzz"]);

  pyProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    res.write(data);
    res.end();
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});