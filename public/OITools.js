function gcd(a,b)
{
    while(a % b)
    {
        c = a % b;
        a = b;
        b = c;
    }
    return b;
}
function Exgcd(a,mod)
{
    let x,y;
    if(gcd(a,mod) !== 1)
        return -1;
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

let Invinputer = document.getElementById("Invinputer");
let InvansDisplayer = document.getElementById("InvAnsDisplayer");
let InvModInputer = document.getElementById("InvinputerMod");

function MulInvHandler(event)
{
    if(event.key == "Enter" && Invinputer.value != "" && InvModInputer.value != "")
    {
        let input = Invinputer.value;
        input = parseInt(input);
        let res = Exgcd(input,parseInt(InvModInputer.value));
        if(res === -1)
            InvansDisplayer.value = "没有逆元";
        else
            InvansDisplayer.value = res;
    }
}
Invinputer.addEventListener("keypress",MulInvHandler);
InvModInputer.addEventListener("keypress",MulInvHandler);

let PhiInputer = document.getElementById("Phiinputer");
let PhiAnsDisplayer = document.getElementById("PhiAnsDisplayer");
PhiInputer.addEventListener("keypress",function(event)
{
    if(event.key == "Enter" && PhiInputer.value != "")
        PhiAnsDisplayer.value = calcPhi(parseInt(PhiInputer.value));
});