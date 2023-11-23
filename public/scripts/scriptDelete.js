async function deleteMovie (){
    const query=document.querySelector("#title").innerHTML
    const title = query.slice(6, query.length)
    let response = await fetch(`http://localhost:3000/admin/deleteMovie/${title}`,
    {
        headers: {
            "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({title})
    })
    let data = await response.json();
    console.log(data)
}

document.getElementById("delete").addEventListener("click", deleteMovie)