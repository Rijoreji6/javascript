function clicks(val)
{
    // console.log(val)
    document.getElementById("out").value += val
}
function clearClick(){
    document.getElementById("out").value=""
}
function equalClick(){
    var text=document.getElementById("out").value;
    var result=eval(text)
    document.getElementById("out").value=result;
}