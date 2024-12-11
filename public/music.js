const lim = Math.floor(window.alist.length * 3 / 10.0) * 10;

var click_times = 0,tot = 0;

var apred = {};
function rnd()
{
    return Math.floor(Math.random() * 114514 / 191 + 1654 * Math.E);
}
function logic()
{
    if(click_times >= lim)
    {
        alert("你已经使用过了" + lim.toString() + "多遍了,休息一下好不好");
        return ;
    }
    var display = document.getElementById("displayMain")
    var src_show = document.getElementById("status");
    var stp = document.getElementById("stopit");
    var id;
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
    stp.style.display = "block";
    display.src = "/audio/" + window.alist[id] + ".mp3";
    src_show.innerHTML = "Now Playing: " + window.alist[id];
    click_times++;
}

function stopPlaying()
{
    var display = document.getElementById("displayMain"),src_show = document.getElementById("status");
    var stp = document.getElementById("stopit");
    display.src = "";
    src_show.innerHTML = "Waiting For Playing...";
    stp.style.display = "none";
}