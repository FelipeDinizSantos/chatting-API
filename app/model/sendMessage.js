function sendMessage(clients, WebSocket, data, ACTION)
{
    clients.forEach(client =>
    {
        if (client.socket.readyState === WebSocket.OPEN && client.id === data.to)
        {
            client.socket.send(JSON.stringify({action: ACTION, message: data.message}));
        }
    })
}

module.exports = sendMessage;