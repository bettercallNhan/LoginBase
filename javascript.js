let a;
a="Hello world"
console.log(a);

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
let ngaunhien = getRndInteger(1,100);

let input ;

do{
    input = parseInt(prompt("Doan so di"));
    if(input < ngaunhien)
    {
        alert("Can so lon hon" );
    }
    else if(input >ngaunhien)
    {
        alert("Can so nho hon");
    }
    else
    {
        alert ("Dung roi thang em");
        console.log("Dap an la "+ngaunhien);
    }

}while(input!=ngaunhien)
