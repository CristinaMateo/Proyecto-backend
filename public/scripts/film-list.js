let cardButtons = document.querySelectorAll(".detail-btn");
    for (let i = 0; i < cardButtons.length; i++) {
        cardButtons[i].addEventListener('click', async function() {
            console.log("clickaste");
            window.location.href = `/search/${cardButtons[i].children[2].innerHTML}/details`;   
        })};