document.getElementById("submitButton").addEventListener("click",function() {
// Fetching values from all input fields and storing them in variables.
    var name = document.getElementById("username1").value;
    var password = document.getElementById("telephone1").value;
    var email = document.getElementById("email1").value;
//Check input Fields Should not be blanks.
    if (name == '' || telephone == '' || email == '' ) {
        alert("Fill All Fields");
    } else {
//Notifying error fields
        var username1 = document.getElementById("username");
        var password1 = document.getElementById("telephone");
        var email1 = document.getElementById("email");
//Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
        if (username1.innerHTML == 'Must be 3+ letters' || password1.innerHTML == 'uncorrect number' || email1.innerHTML == 'Invalid email') {
            alert("Fill Valid Information");
        } else {
//Submit Form When All values are valid.
            document.getElementById("myForm").submit();
            alert("Your data has been sent successfully.");
        }
    }
});
Array.prototype.map.call(document.getElementsByClassName("fieldToValidate"),function(field){
    field.addEventListener("blur",function (e){
    validate(e.target.getAttribute("name"), e.target.value);
})});
function validate(field, query) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
            document.getElementById(field).innerHTML = "Validating..";
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(field).innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById(field).innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
        }
    }
    xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
}