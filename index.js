function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("errormsg")[0].innerHTML = error;
}
function validateform() {
  var returnVal = true;

  var name = document.forms["myform"]["name"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is to short");
    returnVal = false;
  }
  if (name.length == 0) {
    seterror("name", "*Length of name is not zero");
    returnVal = false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email.length > 15) {
    seterror("email", "*Email is not valid");
    returnVal = false;
  }
  var phone = document.forms["myForm"]["phone"].value;
  if (phone.length > 10) {
    seterror("phone", "*Phone is not valid");
    returnVal = false;
  }
  var password = document.forms["myForm"]["pass"].value;
  if (password.length > 15) {
    seterror("pass", "*Password is not valid");
    returnVal = false;
  }
  var comFirmPassword = document.forms["myForm"]["cpass"].value;
  if (comFirmPassword != password) {
    seterror("cpass", "*Password is not matched");
    returnVal = false;
  }
  return returnVal;
}
