function sendSessionInfo(clients, WebSocket, ACTION)
{
    const connectedUsers = Array.from(clients).length;
    
    clients.forEach((client) => 
    {
        if (client.socket.readyState === WebSocket.OPEN) 
        {
            client.socket.send(JSON.stringify({action: ACTION, connectedUsers: connectedUsers, id: client.id}));
        }
    });
}

module.exports = sendSessionInfo;