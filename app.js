const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const sendSessionInfo = require('./app/model/sendSessionInfo');
const generateClientId = require('./app/model/generateClientId');
const sendMessage = require('./app/model/sendMessage');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const APP_PORT = process.env.PORT || 3010;
const ACTIONS = 
{
    MESSAGE: 'message',
    INFORMID: 'informId',
};

app.use(express.json());
app.use(cors());

let clients = new Set();

wss.on('connection', (ws, req) => 
{
    try 
    {
        const clientId = generateClientId(req.headers.cookie);
        console.log(req.headers);
        const clientObject = { id: clientId, socket: ws };
        
        clients.add(clientObject);
        console.log('Usuario Conectado!\nID: ' + clientId);

        sendSessionInfo(clients, WebSocket, ACTIONS.INFORMID);

        ws.on('message', (msg) => {
            try {
                const data = JSON.parse(msg);
                sendMessage(clients, WebSocket, data, ACTIONS.MESSAGE);
            } catch (messageError) {
                console.error('Ocorreu um erro ao tentar enviar a mensagem: ' + messageError);
            }
        });

        ws.on('close', () => 
        {
            try {
                clients.delete(clientObject);
                sendSessionInfo(clients, WebSocket, ACTIONS.INFORMID);
            } catch (closeError) {
                console.error('Ocorreu um erro ao tentar fechar a conexão: ' + closeError);
            }
        });
    } catch (connectionError) 
    {
        console.error('Ocorreu um erro durante a conexão: ' + connectionError);
    }
});

server.listen(APP_PORT, () => 
{
    console.log('Servidor ouvindo a porta', APP_PORT);
});

server.on('error', (error) => 
{
    console.log('Erro ao iniciar o servidor: ' + error);
});