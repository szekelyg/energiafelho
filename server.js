const express = require('express');
const mqtt = require('mqtt');

const app = express();
const port = 3000;

const broker = 'mqtt://broker.hivemq.com';
const topic = 'test/topic';
let receivedMessage = '';

const client = mqtt.connect(broker);

client.on('connect', () => {
    console.log('Connected to MQTT Broker!');
    client.subscribe(topic);
});

client.on('message', (topic, message) => {
    receivedMessage = message.toString();
    console.log(`Received message '${receivedMessage}' on topic '${topic}'`);
});

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { message: receivedMessage });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
