var videos = [["https://player.bilibili.com/player.html?isOutside=true&aid=94997018&bvid=BV1YE411T7aA&cid=365406930&p=1&autoplay=true","Starglow","https://www.bilibili.com/video/BV1YE411T7aA/"], //Starglow
["https://player.bilibili.com/player.html?isOutside=true&aid=268176261&bvid=BV1tY411B7T9&cid=1045363842&p=1&autoplay=true","Lemon","https://www.bilibili.com/video/BV1tY411B7T9/"], //Lemon
["https://player.bilibili.com/player.html?isOutside=true&aid=626125255&bvid=BV1Vt4y19749&cid=210736348&p=1&autoplay=true","崩壊世界の歌姬","https://www.bilibili.com/video/BV1Vt4y19749/"], //崩坏世界的歌姬
["https://player.bilibili.com/player.html?isOutside=true&aid=342127974&bvid=BV1P94y1m7Y8&cid=736595556&p=1&autoplay=true","It Has to Be This Way","https://www.bilibili.com/video/BV1P94y1m7Y8/"], //It Has to Be This Way
];

var click_times = 0;

function rnd()
{
    return Math.floor(Math.random() * 114514 / 191 + 1654 * Math.E);
}
function logic()
{
    if(click_times >= 10)
    {
        alert("你已经使用过了10遍以上了,休息一下好不好");
        return ;
    }
    var display = document.getElementById("displayMain")
    var src_show = document.getElementById("status");
    var id = rnd() % videos.length;
    display.src = videos[id][0];
    src_show.innerHTML = "Now Playing: " + videos[id][1];
    src_show.href = videos[id][2];
    click_times++;
}