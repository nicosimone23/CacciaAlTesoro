function doLogin(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "" || password === "") {
    alert("Username and password are mandatory.");
  } else {
    fetch("https://www.cacciaapi.altervista.org/login.php/loginIpad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.location.href = "game.html";
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
}
