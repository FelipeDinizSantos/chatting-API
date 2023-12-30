const verifyCookies = require('./verifyCookies.js');

function generateClientId(reqCookies)
{
    let id;

    if(reqCookies)
    {
        let cookies = reqCookies.split(';');
        id = verifyCookies(cookies);
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