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
        fetch('https://www.cacciaapi.altervista.org/login-php/login-php/loginIpad.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    { nome: "Gioco1", codice: "Game1", stato: "non attivo" },
    { nome: "Gioco2", codice: "Game2", stato: "attivo" },
    { nome: "Gioco3", codice: "Game3", stato: "non attivo" },
    { nome: "Gioco4", codice: "Game4", stato: "attivo" }
  ])
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Si è verificato un errore:", error));
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
