const myform=document.getElementById("myform");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const male=document.getElementById("male");
const female=document.getElementById("female");
const dob=document.getElementById("dob");
const age=document.getElementById("age");
const mobilenumber=document.getElementById("mobilenumber");
const doorno=document.getElementById("doorno");
const street=document.getElementById("street");
const village=document.getElementById("village");
const city=document.getElementById("city");
const state=document.getElementById("state");
const aadhar=document.getElementById("aadhar");
const pswd=document.getElementById("pswd");
const pswd2=document.getElementById("pswd2");
const button=document.getElementById("submit");



function inputcheck(){
       
    if (fname=" "){
        alert("djkbfv");
    }
    else{
        setsuccess(fname);
    }
         
    if (lname=" "){
        seterror(lname," cannot be blank");
    }
    else{
        setsuccess(lname);
    }

         
    if (mobilenumber=""){
        seterror(mobilenumber,"cannot be blank");
    }
    else{
        setsuccess(mobilenumber);
    }

         
    if (aadhar=""){
        seterror(aadhar," cannot be blank");
    }
    else{
        setsuccess(aadhar);
    }
}

function seterror(input,message){
        const fromcontrol=input.parentElement;
        const small=fromcontrol.QuerySelector("small");
        fromcontrol.className="formcontrol.error";
        small.innerText=message;
}
function setsuccess(input,message){
    const fromcontrol=input.parentElement;
    fromcontrol.className="form-control success";

}