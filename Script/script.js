function doLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Username e password sono obbligatori");
    } else {
      // chiamiamo il server per effettuare la verifica
      fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
        method: 'POST', // o 'GET'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      })
      .then(response => response.json()) // converte la risposta in JSON
      .then(data => console.log(data)) // stampa i dati
      .catch(error => {
        console.error('Errore:', error);
      });
    }
  }
  