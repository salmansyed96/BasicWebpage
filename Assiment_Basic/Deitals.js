// Make a GET request to the API endpoint
fetch('https://dummyjson.com/users')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Do something with the data received from the API
    console.log(data.users);
    // Get the <tbody> element of the table
const tableBody = document.querySelector('#userTable tbody');
// Loop through each user in the array
data.users.forEach(user => {
  // Create a new row for the user
  const newRow = document.createElement('tr');
  newRow.setAttribute("id",  user.id);
  newRow.setAttribute("onclick", "showData("+user.id+")");

  // Create cells for each property and add them to the row
  const nameCell = document.createElement('td');
  const departmentCell = document.createElement('td');
  const phoneCell = document.createElement('td');
  const availabilityCell = document.createElement('td');

  // Populate cell contents with user data
  nameCell.innerHTML = `
    <img src="${user.image}" style="height: 50px; border-radius: 50%;">
    <br>
    ${user.firstName} ${user.lastName}
  `;
  departmentCell.textContent = user.company.department;
  phoneCell.textContent = user.phone;
  availabilityCell.textContent = 'Available';
 console.log(newRow);
  // Append cells to the row
  newRow.appendChild(nameCell);
  newRow.appendChild(departmentCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(availabilityCell);
  console.log(newRow);

  // Append the row to the table body
  tableBody.appendChild(newRow);
});


  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });

function showData(usertId) {
fetch('https://dummyjson.com/users/'+usertId)
.then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });
}




