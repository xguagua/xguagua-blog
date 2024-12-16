const lim = Math.floor(window.alist.length * 3 / 10.0) * 10,len = window.alist.length;

var click_times = 0,tot = 0,currentID = -1145;
var display,src_show,control,buttonImage,prevText,pauseButton,listButton;

window.onload = function()
{
    display = document.getElementById("displayMain");
    src_show = document.getElementById("status");
    control = document.getElementById("controller");
    buttonImage = document.getElementById("btnImg");
    display.onpause = function(){buttonImage.src = "/image/Resume.svg";};
    display.onplay = function(){buttonImage.src = "/image/Pause.svg";};
    listButton = document.getElementById("ListSong");
}

var apred = {};
function rnd()
{
    return Math.floor(Math.random() * 114514 * Math.PI / 191 + 1654 * Math.E);
}
function ASync()
{
    control.style.display = "block";
    src_show.innerHTML = "Now Playing: " + window.alist[currentID];
    prevText = src_show.innerHTML;
    display.src = "/audio/" + window.alist[currentID] + ".mp3";
    display.play();
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
        id = rnd() % len;
    while(apred[id]);
    apred[id] = true;
    ++tot;
    if(tot >= len * 3 / 4)
    {
        apred[rnd() % len] = false;
        --tot;
    }
    currentID = id;
    ASync();
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
        display.play();
        src_show.innerHTML = prevText;
    }
    else
    {
        display.pause();
        prevText = src_show.innerHTML;
        src_show.innerHTML = src_show.innerHTML + "(Paused)";
    }
}

function Change(dx)
{
    if(display.paused)
        logic();
    currentID = (currentID + dx + len) % len;
    ASync();
}