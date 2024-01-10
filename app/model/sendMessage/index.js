function sendMessage(clients, WebSocket, data, ACTION)
{
    clients.forEach(client =>
    {
        if (client.socket.readyState === WebSocket.OPEN && client.id.toString() === data.to.toString())
        {
            client.socket.send(JSON.stringify({action: ACTION, message: data.message, from: data.from, time: data.time}));
        }
    })
}

module.exports = sendMessage;