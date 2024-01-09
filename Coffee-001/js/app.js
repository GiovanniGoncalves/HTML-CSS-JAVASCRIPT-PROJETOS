// Aguarde o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Obtenha o link "About"
    var aboutLink = document.getElementById("about");

    // Adicione um ouvinte de evento de clique ao link "About"
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evite o comportamento padrão do link
      
        // Obtenha a seção "Our Story"
        var ourStorySection = document.getElementById("aboutUS");

        // Role suavemente até a seção "Our Story"
        ourStorySection.scrollIntoView({ behavior: "smooth" });
    });
});