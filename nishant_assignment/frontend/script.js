
function handleLogin() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    login(username,password)
    // // Simple client-side validation (replace this with your actual validation logic)
    // if (username === "kairanishanth123@gmail.com" && password === "123456") {
    //     // Assuming login is successful, redirect to another page
    //     window.location.href = "HomePage.html";
    // } else {
    //     alert("Invalid login credentials. Please try again.");
    // }
 }
function handlesignup() {
    // Get input values
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if (password===confirmpassword){
        createUser(firstname,lastname,password,email)
        // window.location.href = "login.html";
    }
    else{
        alert("password not matched");
    }
}


// Add this function to your script.js file
function searchBrewery() {
    var breweryName = document.getElementById("brewerySearch").value;
    // You can add logic here to perform the brewery search based on the entered name
    // For now, let's just alert the entered brewery name
    alert("Searching for brewery: " + breweryName);
}// Add this function to your script.js file
function searchBrewery() {
    var brewerySearchTerm = document.getElementById("brewerySearch").value;
    var searchOption = document.getElementById("searchOption").value;

    // Clear previous search results
    document.getElementById("searchResults").innerHTML = "";

    // Fetch data from Open Brewery DB API
    fetch(`https://api.openbrewerydb.org/breweries?${searchOption}=${brewerySearchTerm}`)
        .then(response => response.json())
        .then(data => {
            // Process the data and display results
            displayResults(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Add this function to your script.js file
function displayResults(data) {
    var resultsContainer = document.getElementById("searchResults");

    if (data.length === 0) {
        resultsContainer.innerHTML = "No breweries found.";
        return;
    }

    var resultList = document.createElement("ul");

    data.forEach(brewery => {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Name:</strong> ${brewery.name}<br>
            <strong>Address:</strong> ${brewery.street}, ${brewery.city}, ${brewery.state}<br>
            <strong>Phone:</strong> ${brewery.phone || "N/A"}<br>
            <strong>Website:</strong> ${brewery.website_url || "N/A"}<br>
            <strong>Rating:</strong> ${brewery.rating || "N/A"}<br>
            <strong>State, City:</strong> ${brewery.state}, ${brewery.city}<br>
            <input type="radio" name="rating" value="1"/>
            <input type="radio" name="rating" value="2"/>
            <input type="radio" name="rating" value="3"/>
            <input type="radio" name="rating" value="4"/>
            <input type="radio" name="rating" value="5"/>
        `;
        resultList.appendChild(listItem);
    });

    resultsContainer.appendChild(resultList);
}

function createUser(fName,lName,pass,email){
    fetch("http://127.0.0.1:3333/signup",{
        method: 'POST',
        body: JSON.stringify({
            first_name: fName,
            last_name: lName,
            password: pass,
            email: email
        }),
        headers:{
            'content-type': 'application/json'
        }
    }).then((res) => res.json()).then((res) => {
        if(res.status == 1){
            alert('User Create Successfully')
            window.location.href = "login.html"
        }
    })
}

function login(email,pass){
    fetch(`http://127.0.0.1:3333/login?email=${email}&pass=${pass}`)
    .then((res) => res.json())
    .then((res) => {
        if(res.status == 1){
            alert('Login Success')
            window.location.href = "HomePage.html"
        }else{
            alert("Invalid Credentials")
        }
    })
}