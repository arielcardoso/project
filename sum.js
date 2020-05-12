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
    let result;
    
    // if(chkNum<2){
    //     result = "This number is NOT prime number";
    // }
    

    // for(let i = 2; i <= chkNum; i++){

    //     j=0;
            
    //     for(k=1; k<=i; k++){
         
    //         if(i % k == 0 ){
    //             j++;

    //         }
    //     }
    //     if(j==2){ 
    //         result = "This number is prime number";
    //     }else{ 
    //         result = "This number is NOT prime number";
    //     }

    // }   

    

    if(chkNum == 2 || chkNum == 3){
        result = "This number is prime number";
    }

    if(chkNum == 1){
        result = "This number is NOT prime number";

    }

    // prime number is always odd number except 2
    if(chkNum > 2 && chkNum % 2 == 0){ 
        result = "This number is NOT prime number";

    }else{
        for(let i = 3; i < chkNum; i+=2){
           
            if(chkNum % i == 0){ 
                result = "This number is NOT prime number";
                break;
            }else{
                result = "This number is prime number";

            }
           
        }

    }

   document.getElementById("output2").innerHTML = result;

   
}``