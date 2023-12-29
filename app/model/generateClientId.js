function generateClientId()
{
    const getRandomNum = (max)=>
    {
        let randomNum;

        for(let i = 0; i<=4; ++i)
        {
            randomNum = Math.floor(Math.random() * max);
        }

        return randomNum.toString();
    }

    const getTimestamp = ()=>
    {
        let timestamp = new Date().getTime().toString();
        let lastTwoDigits = timestamp.slice(-2);
        
        return lastTwoDigits.toString();
    }

    let id = getTimestamp().concat(getRandomNum(100)); 
    return id;
}

module.exports = generateClientId;