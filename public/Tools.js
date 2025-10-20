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
    if(gcd(a,mod) !== 1 || (a % mod) === 0)
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

function isPrime(x)
{
    let Upper = Math.sqrt(x);
    for(let i = 2;i <= Upper;++i)
    {
        if(x % i == 0)
            return "不是";
    }
    return "是";
}

const Limit = Math.pow(2,128);
let Invinputer = document.getElementById("Invinputer"),InvansDisplayer = document.getElementById("InvAnsDisplayer"),InvModInputer = document.getElementById("InvinputerMod");
var count = 0;
function MulInvHandler(event)
{
    if(event.key == "Enter")
    {
        if(Invinputer.value != "" && InvModInputer.value != "")
        {
            let input = parseInt(Invinputer.value,10);
            if(input >= Limit)
            {
                InvansDisplayer.value = "太大了";
                return ;
            }
            let res = Exgcd(input,parseInt(InvModInputer.value));
            if(res === -1)
                InvansDisplayer.value = "没有逆元";
            else
                InvansDisplayer.value = res;
        }
    }
    else
        InvansDisplayer.value = "";
}
Invinputer.addEventListener("keypress",MulInvHandler);
InvModInputer.addEventListener("keypress",MulInvHandler);

let PhiInputer = document.getElementById("Phiinputer"),PhiAnsDisplayer = document.getElementById("PhiAnsDisplayer");
PhiInputer.addEventListener("keypress",function(event)
{
    if(event.key == "Enter")
    {
        if(PhiInputer.value != "")
        {
            let input = parseInt(PhiInputer.value,10);
            if(input >= Limit)
            {
               PhiAnsDisplayer.value = "太大了";
               return ;
            }
            PhiAnsDisplayer.value = calcPhi(input);
        }
    }
    else
        PhiAnsDisplayer.value = "";
});

let PrimeInputer = document.getElementById("PrimeInputer"),PrimeAnsDisplayer = document.getElementById("PrimeAnsDisplayer");
PrimeInputer.addEventListener("keypress",function(event)
{
    if(event.key == "Enter")
    {
        if(PrimeInputer.value != "")
        {
            let input = parseInt(PrimeInputer.value,10);
            if(input >= Limit)
            {
               PrimeAnsDisplayer.value = "太大了";
               return ;
            }
            PrimeAnsDisplayer.value = isPrime(input);
        }
    }
    else
        PrimeAnsDisplayer.value = "";
});