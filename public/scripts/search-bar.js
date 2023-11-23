// function submitForm(event) {
//     // Get form data
//     event.preventDefault()
//     var formData = new FormData(document.getElementById("search-form"));
//     console.log(formData)
//     // Add your access token to the headers
//     var headers = new Headers();
//     headers.append("Authorization", "Bearer YOUR_ACCESS_TOKEN");

//     // Make a POST request using the Fetch API
//     fetch("your-api-endpoint", {
//         method: "POST",
//         headers: headers,
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//     });
// }