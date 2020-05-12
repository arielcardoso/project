// 7rd Section
// Ask a birth year and calculate how many days you lived till today. Show the days you lived in a DOM element. (Please ignore the leap year)

// it is need to convert js time to days
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

function CalculateDate() {
    let birthdayDate = document.getElementById("birthdate").value;

    if (birthdayDate != "") {
        birthdayDate = new Date(birthdayDate);
        if (isNaN(birthdayDate) == false) {
            let todayDate = new Date();
            let result = (todayDate.getTime() - birthdayDate.getTime())/oneDayInMilliseconds; 
            result = Math.round(result);
            if (result > 0) {
                document.getElementById("section7-result").innerHTML = "Congratulations, you lived for " + result + " days.";
            } else {
                document.getElementById("section7-result").innerHTML = "You will be born in " + result + " days!";
            }       
        }
    }
}
