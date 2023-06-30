document.addEventListener("DOMContentLoaded", function (event) {

    async function init() {

        let allworks = await fetchAllWork();

        DisplayAllWorks(allworks);

        let allfiltres = await fetchAllfiltres();

        DisplayAllFiltres(allfiltres);
    }

    init();


    function fetchAllWork() {
        return fetch("http://localhost:5678/api/works")
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function fetchAllfiltres() {
        return fetch("http://localhost:5678/api/categories")
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function DisplayAllWorks(allworks) {

        let gallery = document.querySelector(".gallery")

        for (const work of allworks) {
            gallery.insertAdjacentHTML("beforeend",
                `
            <figure id="work-${work.id}">
                <img src="${work.imageUrl}" alt="${work.title}">
                <figcaption>${work.title}</figcaption>
            </figure>
            `);
        }

    }

    function DisplayAllFiltres(allfiltres) {
        let filtres = document.querySelector(".filtres")
        console.log(allfiltres)
        for (const filtre of allfiltres) {
            filtres.insertAdjacentHTML("beforeend",
                `
                <li id="${filtre.id}">${filtre.name}</li>`);
        }

    }


})
