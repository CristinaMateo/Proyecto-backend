let cardButtons = document.querySelectorAll(".detail-btn");
    for (let i = 0; i < cardButtons.length; i++) {
        cardButtons[i].addEventListener('click', async function(req, res) {
        // Hacemos peticion para obtener datos generales de la peli clickada
        let response = await fetch(`https://api.themoviedb.org/3/movie/${cardButtons[i].children[2].innerHTML}?api_key=1b1d8ac19d2157bc278dad11d08b1894`);
        let singleMovieDtl = await response.json()
        console.log(singleMovieDtl)

        // Hacemos peti para obtener datos de director
        let response2 = await fetch(`https://api.themoviedb.org/3/movie/${cardButtons[i].children[2].innerHTML}/credits?&api_key=03ce75d14fd1010ba46c32378b9f079a`)
        let crewDetails = await response2.json();
        console.log(crewDetails)

        res.render('filmDetail', { singleMovieDtl, crewDetails })
        
        })};