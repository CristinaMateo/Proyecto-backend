
async function updateMovie(event) {
    event.preventDefault();
    console.log("holi caracoli")
    const oldtitle = document.querySelector("input[name=title]").value
    const title = document.querySelector("input[name=newtitle]").value
    const release_date = document.querySelector("input[name=release_date]").value
    const director = document.querySelector("input[name=director]").value
    const genre = document.querySelector("input[name=genre]").value
    const poster_path = document.querySelector("input[name=poster_path]").value
    const runtime = document.querySelector("input[name=runtime]").value
    const overview = document.querySelector("input[name=overview]").value
    const vote_average = document.querySelector("input[name=vote_average]").value
    let response = await fetch(`http://localhost:3000/admin/updateMovie/${oldtitle}`, 
        {
            headers: {
                "Content-Type": "application/json",
            }, method: "PUT", body: JSON.stringify({ title, release_date, director, genre, poster_path, runtime, overview, vote_average })
        });
    let data = await response.json();
    console.log(data)
}

document.getElementById("update").addEventListener("click", updateMovie)