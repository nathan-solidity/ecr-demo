import express from 'express';
import os from 'os';

const app = express();

app.get('/', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIP = req.socket.remoteAddress;
  const containerIP = req.socket.localAddress;
  const containerName = os.hostname();

  console.log('Hello Nhan AWS');
  res.json({
    serviceName: 'AWS ECS 444444',
    contactName: 'Nhan Nguyen 444444',
    clientIp: clientIp,
    elbIP: elbIP,
    containerIP: containerIP,
    containerName: containerName
  });
});

app.listen(8080, () => {
  console.log("App Started Successfully 444444!");
});