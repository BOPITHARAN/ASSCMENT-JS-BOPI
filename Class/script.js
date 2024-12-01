function validateform() {
  var name = document.myForm.name.value;
  var password = document.myForm.password.value;

  if (N1 == null || N1 == "") {
    alert("Name can't be blank");
    return false;
  } else if (P1.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}  