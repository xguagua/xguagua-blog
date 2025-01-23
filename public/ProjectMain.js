let inputer = document.getElementById("inputer");
let ansDisplayer = document.getElementById("AnsDisplayer");
Invinputer.addEventListener("keypress",function(event)
{
    if(event.key == "Enter" && Invinputer.value != "")
    {
        let input = Invinputer.value;
        input = parseInt(input);
        InvansDisplayer.value = input;
    }
})