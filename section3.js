function showAge(){
    let num = document.getElementById("age").value;
    if (num <= 20){
        document.getElementById("outputS3").innerHTML = "You need to study hard";
    } else if (num <= 30){
        document.getElementById("outputS3").innerHTML = "Study more";
    } else if (num <= 40){
        document.getElementById("outputS3").innerHTML = "Make a lot of money";
    } else if (num <= 50){
        document.getElementById("outputS3").innerHTML = "Be successful";
    } else {
        document.getElementById("outputS3").innerHTML = "Travel a lot";
    }
}