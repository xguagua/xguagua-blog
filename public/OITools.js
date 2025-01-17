function Exgcd(a,mod)
{
    let x,y;
    function solve(a,b)
    {
        if(b === 0)
        {
            x = 1,y = 0;
            return ;
        }
        solve(b,a % b);
        let t = x;
        x = y;
        y = t - y * Math.floor(a / b)
    }
    solve(a,mod);
    return (x % mod + mod) % mod;
}

function calcPhi(x)
{
    let res = x;
    for(let i = 2;i * i <= x;++i)
    {
        if(x % i === 0)
        {
            res = res / i * (i - 1);
            while(x % i === 0)
                x /= i;
        }
    }
    if(x > 1)
        res = res / x * (x - 1);
    return res;
}