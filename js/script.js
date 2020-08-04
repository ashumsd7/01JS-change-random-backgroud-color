document.getElementById("myBtn").addEventListener("click", getColorValue);
function getColorValue(){
    let val= Math.random();
    val= val*1000000;
    val= Math.floor(val)
    changeColor(val)
    
}
function changeColor(val){
    let colorCode= "#"+val;
    document.getElementById("mybody").style.background=colorCode;
    document.getElementById("mycode").innerText=colorCode;
    
}