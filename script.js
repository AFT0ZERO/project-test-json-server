// Get (search for user)
const Search = document.getElementById("search-id");

Search.addEventListener("click", async (e) => {
  e.preventDefault();
  
  const SearchValue = document.getElementById("id").value;

  try {
    const response = await fetch(`http://localhost:3000/users/${SearchValue}`);
    const data = await response.json();

    const tableContainer = document.getElementsByClassName("user-data-fetch")[0];
    tableContainer.innerHTML = "";


    const userTd = document.createElement("tr");
    userTd.innerHTML = `
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.age}</td>
      <td>${data.address.street}</td>
      <td>${data.address.city}</td>
    `;

    tableContainer.appendChild(userTd);

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});

//post (Add user)
let AddUser = document.getElementById("Add-User");

// Retrieve the last ID from local storage or default to 10 if not found
let ID = localStorage.getItem("lastID") ? parseInt(localStorage.getItem("lastID"), 10) : 10;

AddUser.addEventListener("click", (e) => {
    e.preventDefault();

    let userName = document.getElementById("nameAdd").value;
    let userEmail = document.getElementById("emailAdd").value;
    let userAge = document.getElementById("ageAdd").value;
    let userStreet = document.getElementById("streetAdd").value;
    let userCity = document.getElementById("cityAdd").value;

    ++ID; // Increment the ID
    localStorage.setItem("lastID", ID); // Save the latest ID to local storage

    let data1 = {
        "id": String(ID),
        "name": userName,
        "email": userEmail,
        "age": userAge,
        "address": {
            "street": userStreet,
            "city": userCity
        }
    };

    fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

//update user info 
let updtateUser = document.getElementById("update-user");

updtateUser.addEventListener("click", (e) => {
    e.preventDefault();

    let userId = document.getElementById("IdUpdate").value;
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userAge = document.getElementById("age").value;
    let userStreet = document.getElementById("street").value;
    let userCity = document.getElementById("city").value;


    let data1 = {
        "id": userId,
        "name": userName,
        "email": userEmail,
        "age": userAge,
        "address": {
            "street": userStreet,
            "city": userCity
        }
    };

    fetch(`http://localhost:3000/users/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// delete user 

let deleteUser = document.getElementById("Del-User");

deleteUser.addEventListener("click", (e) => {
    e.preventDefault();

    let userId = document.getElementById("idDel").value;
  
    fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


























// fetch(`http://localhost:3000/users`)
// .then((request)=>{ return request.json();
// }).then((data)=>{
//     document.getElementById("hihi").addEventListener("click", ()=>{
// //    const tableContanier = document.getElementsByClassName("user-data-fetch")[0];
//    const tableContanier = document.getElementById("hi");
//    data.forEach(user => {
//     const userTd = document.createElement("div");
//     // userTd.className='info';
//     userTd.innerHTML=`
//         <p>${user.id}</p>
//         <p>${user.name}</p>
//         <p>${user.email}</p>
//         <p>${user.age}</p>
//         <p>${user.street}</p>
//         <p>${user.city}</p>
//     `;
//     tableContanier.appendChild(userTd);
//    });
//     })
// });

// Fetch user data from the local server
// fetch('http://localhost:3000/users')
// .then((response) => response.json())
// .then((data) => {
//   // Add an event listener to the button with ID 'hihi'
//   document.getElementById('hihi').addEventListener('click', () => {
//     // Get the container where the user data will be displayed
//     const tableContainer = document.getElementById('hi');
//     // Clear any previous content in the container
//     tableContainer.innerHTML = '';
//     // Iterate over each user in the data
//     data.forEach((user) => {
//       // Create a new div element for each user
//       const userDiv = document.createElement('div');
//       // Populate the div with the user's information
//       userDiv.innerHTML = `
//         <p>ID: ${user.id}</p>
//         <p>Name: ${user.name}</p>
//         <p>Email: ${user.email}</p>
//         <p>Age: ${user.age}</p>
//         <p>Street: ${user.street}</p>
//         <p>City: ${user.city}</p>
//       `;
//       // Append the new div to the container
//       tableContainer.appendChild(userDiv);
//     });
//   });
// })
// .catch((error) => {
//   console.error('Error fetching user data:', error);
// });


// const apiUrl = "http://localhost:3000/users";
// document.getElementById("hihi").addEventListener("click", (e) => {
//     e.preventDefault()
// fetch(apiUrl)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {

//             const dataContainer = document.getElementById('hi');
//             data.forEach(user => {
//                 const itemDiv = document.createElement('div');
//                 itemDiv.className = 'item';
//                 itemDiv.innerHTML = `
//                     <p>ID: ${user.id}</p>
//         <p>Name: ${user.name}</p>
//        <p>Email: ${user.id}</p>

//                     `;
//                 dataContainer.appendChild(itemDiv);
//             })
//         });
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });