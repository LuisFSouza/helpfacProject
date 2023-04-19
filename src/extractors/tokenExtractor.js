
function cookieExtractor(req)
{
    var token = null;
    if(req && req.cookies)
    {
        token = req.cookies['token']
    }
    return token;
}

module.exports = 
{
    cookieExtractor
}