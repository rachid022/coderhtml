let codes =document.getElementById("codes");
let execute=document.getElementById("execute");
let delete_area=document.getElementById("delete");
let result=document.getElementById("result_1");
execute.onclick=()=>{
    result.innerHTML=codes.value;
    localStorage.setItem("result",codes.value);
}

delete_area.onclick=()=>{
     result.innerHTML="";
     codes.value="";
     localStorage.removeItem("result");
     location.reload();
}

onload=()=>{
    if(localStorage.getItem("result")!==null){
        codes.value= localStorage.getItem("result");
    }
     
    result.innerHTML=codes.value;
}