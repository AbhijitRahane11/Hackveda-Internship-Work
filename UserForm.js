function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("errormsg").innerHTML = error;
  }
  function validateform() {
    let returnVal = true;
  
    let name = document.forms["contact-form"]["name"].value;
    if (name.length < 5) {
      seterror("name", "*Length of name is to short");
      returnVal = false;
    }
    if (name.length == 0) {
      seterror("name", "*Length of name is not zero");
      returnVal = false;
    }
    let email = document.forms["contact-form"]["email"].value;
    if (email.length > 15) {
      seterror("email", "*Email is not valid");
      returnVal = false;
    }
    let phone = document.forms["contact-form"]["phone"].value;
    if (phone.length > 10) {
      seterror("phone", "*Phone is not valid");
      returnVal = false;
    }
    let password = document.forms["contact-form"]["pass"].value;
    if (password.length > 15) {
      seterror("pass", "*Password is not valid");
      returnVal = false;
    }
    let comFirmPassword = document.forms["contact-form"]["cpass"].value;
    if (comFirmPassword != password) {
      seterror("cpass", "*Password is not matched");
      returnVal = false;
    }
    return returnVal;
  }
  