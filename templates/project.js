function performValidation() {
    return (validdateForm())
}

function validdateForm() {

    var fullName = document.getElementById("full_name")
    var email = document.getElementById("email_id")
    var phoneNumber = document.getElementById("phone_number")
    var oximeterRead = document.getElementById("Oximeter")
    var temperature = document.getElementById("Temperature")
    var severeFev = document.getElementById("severe_fev")

    var checkName = /^[a-zA-Z]+$/i
    var checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var checkPhoneNumber = /^\d{10}$/
    var checkSevereFever = "Yes"

    if ( fullName.value.trim() == '' ) {
        alert("Please Enter your name")
        fullName.style.border = "2px solid red";
        return false;
    }
    
    if ( !checkName.test(fullName.value) ) {
        alert("Please Enter your name properly")
        fullName.style.border = "2px solid red";
        return false;
    }

    if(email.value == "" || !checkEmail.test(email.value)) {
        alert("Please enter valid email address [valid format is : DDCCCDD@nirmauni.ac.in]");
        email.style.border = "solid 2px red";
        return false;
    }

    if ( !phoneNumber.value.match(checkPhoneNumber) ) {
        alert("Type a valid Phone Number")
        return false;
    }

    if ( (oximeterRead.value <= 90) && (temperature.value >= 50) && (severeFev.value=="Yes") ) {
        alert("Covid +ve")
        return true;
    }
    else {
        alert("Covid -ve")
        return false;
    }

}