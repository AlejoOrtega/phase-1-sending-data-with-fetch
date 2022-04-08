// Add your code here
const postObj = {
    name : "Steve",
    email : "steve@steve.com"
}

function submitData() {
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(postObj)
    }).then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error.message))
}

function displayResponse(data){
    let main = document.createElement("p");
    main.innerHTML=`<h1>${data.name}</h1>
    <h2>${data.email}</h2>
    <h3>${data.id}</h3>`
    document.querySelector('body').appendChild(main)
}

function displayError(data){
    let main = document.createElement("p");
    main.innerHTML=`<h1>${data}</h1>`
    document.querySelector('body').appendChild(main)
}

submitData()