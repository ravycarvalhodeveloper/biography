  function toggleWelcomeMessage() {
      var message = document.getElementById('welcomeMessage');
      
      // Verifica se a mensagem está visível ou não
      if (message.style.display === "none") {
        message.style.display = "block"; // Exibe a mensagem
      } else {
        message.style.display = "none"; // Esconde a mensagem
      }
    }