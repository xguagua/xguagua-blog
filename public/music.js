const lim = Math.floor(window.alist.length * 3 / 10.0) * 10;

var click_times = 0,tot = 0;
var display,src_show,control,buttonImage,prevText,pauseButton;


window.onload = function()
{
    display = document.getElementById("displayMain");
    src_show = document.getElementById("status");
    control = document.getElementById("controller");
    buttonImage = document.getElementById("btnImg");
    display.onpause = function(){buttonImage.src = "/image/Resume.svg";};
    display.onplay = function(){buttonImage.src = "/image/Pause.svg";};
}

var apred = {};
function rnd()
{
    return Math.floor(Math.random() * 114514 * Math.PI / 191 + 1654 * Math.E);
}
function logic()
{
    if(click_times >= lim)
    {
        alert("你已经使用过了" + lim.toString() + "多遍了,休息一下好不好");
        return ;
    }
    let id;
    do 
        id = rnd() % window.alist.length;
    while(apred[id]);
    apred[id] = true;
    ++tot;
    if(tot >= window.alist.length * 3 / 4)
    {
        apred[rnd() % window.alist.length] = false;
        --tot;
    }
    control.style.display = "block";
    display.src = "/audio/" + window.alist[id] + ".mp3";
    src_show.innerHTML = "Now Playing: " + window.alist[id];
    click_times++;
}

function stopPlaying()
{
    display.src = "";
    src_show.innerHTML = "Waiting For Playing...";
    control.style.display = "none";
}

function pausePlaying()
{
    if(display.paused)
    {
        // buttonImage.src = "/image/Pause.svg";
        display.play();
        src_show.innerHTML = prevText;
    }
    else
    {
        // buttonImage.src = "/image/Resume.svg";
        display.pause();
        prevText = src_show.innerHTML;
        src_show.innerHTML = src_show.innerHTML + "(Paused)";
    }
}