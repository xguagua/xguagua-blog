var DivElem = document.getElementById("ShowPart");
window.onload = function(){
    for(let i = 0;i < window.alist.length;i++)
    {
        const Fa = document.createElement("span");
        const Li = document.createElement("li");
        const BR = document.createElement("br");
        const Text = document.createTextNode(window.alist[i]);
        Li.appendChild(Text);
        Fa.appendChild(Li);
        Fa.appendChild(BR);
        DivElem.appendChild(Fa);
    }
}