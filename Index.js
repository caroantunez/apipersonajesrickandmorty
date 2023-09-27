function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data.results); // Pasar solo los resultados a la función done
        })
        .catch(error => {
            console.error("Error al obtener datos:", error);
        });
}

getCharacters(results => {
    const main = document.querySelector("main");

    results.forEach(personaje => {
        // Crear un nuevo elemento article para cada personaje
        const article = document.createElement("article");

        article.innerHTML = `
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        `;

        main.appendChild(article); // Adjuntar el elemento article al elemento main
    });
});
