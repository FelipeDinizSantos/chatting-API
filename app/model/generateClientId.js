function generateClientId(queryString)
{
    const queryParams = new URLSearchParams(queryString);

    let id;

    if(queryParams.get('userID') !== '0')
    {
        id = JSON.parse(queryParams.get('userID'));

        return id;
    }
    else
    {
        const getRandomNum = (max)=>
        {
            let randomNum;
    
            for(let i = 0; i<=2; ++i)
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
    
        id = getTimestamp().concat(getRandomNum(100)); 
        return id;
    }
}

module.exports = generateClientId;