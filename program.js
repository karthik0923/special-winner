function btnclick(val){
    console.log(val)
    document.getElementById("screen").value=val+    document.getElementById("screen").value;
}
function clearup(){
    document.getElementById("screen").value="";
}
function resultGen(){
    var resultText=document.getElementById("screen").value
    var result=eval(resultText)
    console.log(result)
    document.getElementById("screen").value=result
}