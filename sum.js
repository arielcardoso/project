function sum(){
    let number1 = document.getElementById("4th_num1").value;
    let number2 = document.getElementById("4th_num2").value;
    let sum = 0;
    let smallnum = number1;
    let bignum = number2;

   
    if(number1==""){
        alert("Pelase write first number");
        document.getElementById("4th_num1").focus();
        
    }else if(number2==""){
        alert("Pelase write second number");
        document.getElementById("4th_num2").focus();
       
    }else{
        if(number1>number2){
            
            smallnum = number2;
            bignum = number1;
            
        }

        for(smallnum; smallnum <= bignum; smallnum++){
             sum = sum+parseInt(smallnum);
        }   
             document.getElementById("output").innerHTML = sum;
       
    }
        
    
}

function check(){
    let chkNum = document.getElementById("5th_num").value;
    let isPrimeNum = true;

    for(let i = 2; i < chkNum; i++){
        if(chkNum % i == 0){
            isPrimeNum = false;
        }
    }   
        if(chkNum < 2) {
            isPrimeNum = false;
        }

        if(isPrimeNum == true ){
            document.getElementById("output2").innerHTML = "This number is prime number";

        }else{
            document.getElementById("output2").innerHTML = "This number is NOT prime number";
           
        }
        

    
}