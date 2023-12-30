function verifyCookies(cookies)
{
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('yourID=')) {
            return cookie.split('=')[1];
        }
    }
}

module.exports = verifyCookies;