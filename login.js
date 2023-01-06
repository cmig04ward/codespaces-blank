var attempt = 3; // This is the number of attempts.
// This function takes action when you click the login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Frontend" && password == "Developer2023") {
    alert("Access Granted");
    window.location = "home.html"; // After I click in the correct password this will redirect me to my webpage.
    return false;
  } else {
    attempt--; // This is deducting the number of attempts that have been used in login attempts.
    alert("You have left " + attempt + " attempt;");
    // Access denied after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
