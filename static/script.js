//http://192.168.31.203:8001/token
url = 'https://gba.4dev.kz'
async function Token(
    // username,password
    ) {
    try{
    let response = await fetch(url + '/userMe', {
        method: "GET",
        //body: new URLSearchParams({ username: username, password: password }),
        Headers: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoxLCJ1c2VyX3NlY3JldCI6InB6em9zenRybXpkcGR5eW1seG9pcGlzZnlmZW9reHpwcHVudnd4cXhueG5pd29lcW9uY2VydXNsdmZwbHlzcXlidmFzbWdibGdncmljbmp0cWxkdGRwZ2NnY2x3YXB5YWl0dGl1bWVud2FvZWFibmtwbmVyZWxraWxra2Zwbmtna2FteG55ZXJpbWlua3RqbmRteHNrbmFtZW1rc21tZGVwZWhudHprYnlyYWJqYXl2ZmpreXZyemx3c3R1dGV2eW1rc2l1amdwYmhlcHlsZWRscHpydWJhb3Nnd3dlaXFoZWJteWZsd2J1YWR2cHZhbGRlYmlueW5kd2FocGVhbSIsImhhc2hlZF9wYXNzd29yZCI6IiQyYiQxMiQ0N1h0ak9TTWFKMEhKalY1SlZadzVlTTVFLjgySGgwSW1sak5QMTQwUWt5TjZQMDQ2RkpTeSJ9.MlfW00zFHnwyz3eLiirQ-V5MNuj2cnh_FtGvoIF62P0'
    })
    .then(promiseResult => {
       console.log(promiseResult)
       return promiseResult.json()
    })
    .then(response => {
        console.log(response)
    })
    }
    catch(err){
    console.error(err);
    // Handle errors here
    }
    
};
console.log(Token(
    // '123','123'
    ))
