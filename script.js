let form=document.getElementById("form");
let date=document.forms["form"]["day"];
let month=document.forms["month"]["month"];
let year=document.forms["year"]["year"];

function myButton(){
    if(date.value.length=="" || month.value.length=="" || year.value.length==""){
        // document.getElementById("").innerHTML="PLEASE FILL OUT ALL FIELDS!!"
        alert("kindlu fii all the fields");
        return false;
    }
}
