var express = require('express');
const path = require('path')

let app1 = express();
let app2 = express();
let app3 = express();
let app4 = express();
let app5 = express();
let app6 = express();


app1.set('view engine', 'hbs');

const staticPath = path.join(__dirname, '/public');
const homePath1 = path.join(__dirname, '/public/views/index.hbs');
// const homePath2 = path.join(__dirname, '/public/index2.html');
const menuPath1 = path.join(__dirname, '/public/views/menu.hbs');
// const menuPath2 = path.join(__dirname, '/public/menu2.html');

app1.use(express.static(staticPath));
app2.use(express.static(staticPath));
app3.use(express.static(staticPath));
app4.use(express.static(staticPath));
app5.use(express.static(staticPath));
app6.use(express.static(staticPath));

app1.use(express.static(homePath1));
app2.use(express.static(homePath1));
app3.use(express.static(homePath1));
app4.use(express.static(homePath1));
app5.use(express.static(homePath1));
app6.use(express.static(homePath1));
// app2.use(express.static(homePath2));

app1.use(express.static(menuPath1));
app2.use(express.static(menuPath1));
app3.use(express.static(menuPath1));
app4.use(express.static(menuPath1));
app5.use(express.static(menuPath1));
app6.use(express.static(menuPath1));
// app2.use(express.static(menuPath2));


app1.listen(3000, () => {
  console.log("Started server on 3000");
});
app2.listen(3001, () => {
  console.log("Started server on 3001");   
});
app3.listen(3002, () => {
  console.log("Started server on 3002");   
});
app4.listen(3003, () => {
  console.log("Started server on 3003");   
});
app5.listen(3004, () => {
  console.log("Started server on 3004");   
});
app6.listen(3005, () => {
  console.log("Started server on 3005");   
});



app1.get('/', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(homePath1, {
    server_port : port_number,
  });
})

app2.get('/', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(homePath1, {
    server_port : port_number,
  });
})

app3.get('/', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(homePath1, {
    server_port : port_number,
  });
})

app4.get('/', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(homePath1, {
    server_port : port_number,
  });
})

app5.get('/', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(homePath1, {
    server_port : port_number,
  });
})

app6.get('/', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(homePath1, {
    server_port : port_number,
  });
})



// ***********************Menu page Request******************

app1.get('/menu', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(menuPath1, {
    server_port : port_number,
  });
})

app2.get('/menu', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(menuPath1, {
    server_port : port_number,
  });
})

app3.get('/menu', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(menuPath1, {
    server_port : port_number,
  });
})

app4.get('/menu', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(menuPath1, {
    server_port : port_number,
  });
})

app5.get('/menu', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(menuPath1, {
    server_port : port_number,
  });
})

app6.get('/menu', function(req, res){
  const port_number = req.socket.localPort;
  console.log("Port number is"+port_number);
  res.render(menuPath1, {
    server_port : port_number,
  });
})




// app1.get('/', function(req, res){
//   // console.log("Server 3000");
//   // res.send("Hello, I'm server 3000");
//   // res.send("Hello World");
//   res.sendFile(homePath1);
// })
// app2.get('/', function(req, res){
//   // console.log("Server 3001");
//   // res.send("Hello I'm server 3001");
//   res.sendFile(homePath2);
// })
// app3.get('/', function(req, res){
//   // res.send("Hello I'm server 3002");
//   res.sendFile(menuPath1);
// })
// app4.get('/', function(req, res){
//   // res.send("Hello I'm server 3003");
//   res.sendFile(menuPath2);
// })
// app5.get('/', function(req, res){
//   res.send("Hello I'm server 3004");
// })
// app6.get('/', function(req, res){
//   res.send("Hello I'm server 3005");
// })