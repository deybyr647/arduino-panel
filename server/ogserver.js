const { spawn } = require('child_process');
const express = require('express');

const runScript = () => {
  const pythonProcess = spawn('python', ['../pythonCode/test.py', "Bryan"]);
  
  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  return "Done!";
}

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/url", (req, res, next) => {
  //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  res.json([`${runScript()}`]);
  runScript();
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});