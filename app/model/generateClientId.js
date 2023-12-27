function generateClientId(wss)
{
    let id = Array.from(wss.clients).length.toString();
    return id;
}

module.exports = generateClientId;