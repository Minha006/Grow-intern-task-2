let result = document.getElementById("input-text");

let calculate = (number)=>{
  result.value+=number;
}

let Result = ()=>{
    try{
        result.value = eval (result.value)
    }
catch(error){
    alert("Enter the Correct Input⚠");
}
}
function clr(){
    result.value = "";
}
function del() {
    result.value = result.value.slice(0,-1);
}