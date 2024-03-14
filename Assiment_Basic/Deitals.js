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
  // Append cells to the row
  newRow.appendChild(nameCell);
  newRow.appendChild(departmentCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(availabilityCell);

  // Append the row to the table body
  tableBody.appendChild(newRow);
});

showData(data.users[0].id);
// showData(data.image[0].id);



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
    const profilePic = document.querySelector('#profilePic');
    console.log(profilePic);
      const picture = document.createElement('img');
    picture.setAttribute("src",  data.image);
    picture.setAttribute("style",  "height:80px;border-radius:50%;");
    profilePic.appendChild(picture);


          //User name
    const userName = document.querySelector('#userName');
    const nameCell = document.createElement('span');
    nameCell.textContent = data.firstName;
    userName.appendChild(nameCell);

    //Department
    const userDepartment = document.querySelector('#Department');
    const DepartmentCell = document.createElement('span');
    DepartmentCell.textContent = data.company.department;
    userDepartment.appendChild(DepartmentCell);

    //Officetell
    const userofficeTel = document.querySelector('#officeTel');
    const officeTelCell = document.createElement('span');
    officeTelCell.textContent = data.phone;
    userofficeTel.appendChild(officeTelCell);

    //Mobile tell
    const userMobile = document.querySelector('#officeTel1');
    const MobileTelCell = document.createElement('span');
    MobileTelCell.textContent = data.phone;
    userMobile.appendChild(MobileTelCell);
    
    //Email
    const useremail = document.querySelector('#email');
    const emailCell = document.createElement('span');
    emailCell.textContent = data.email;
    useremail.appendChild(emailCell);
    
    //Domain
    const userdomain = document.querySelector('#domain');
    const domainCell = document.createElement('span');
    domainCell.textContent = data.domain;
    userdomain.appendChild(domainCell);
    
    //Office
    const useraddress = document.querySelector('#Department1');
    const addressCell = document.createElement('span');
    addressCell.textContent = data.company.department;
    useraddress.appendChild(addressCell);
    

    //gender
    const usergender = document.querySelector('#gender');
    const genderCell = document.createElement('span');
    genderCell.textContent = data.gender;
    usergender.appendChild(genderCell);

    //birthDate
    const userbirthDate = document.querySelector('#birthDate');
    const birthDateCell = document.createElement('span');
    birthDateCell.textContent = data.birthDate;
    userbirthDate.appendChild(birthDateCell);


    //city
    const usercity = document.querySelector('#city');
    const cityCell = document.createElement('span');
    cityCell.textContent = data.address.city;
    usercity.appendChild(cityCell);
  
    //company
    const usercompany = document.querySelector('#company');
    const companyCell = document.createElement('span');
    companyCell.textContent = data.company.name;
    usercompany.appendChild(companyCell);
    


  })
  // .catch(error => {
  //   // Handle any errors that occurred during the fetch
  //   console.error('There was a problem with the fetch operation:', error);
  // });
}




// {
//   "id": 1,
//   "firstName": "Terry",
//   "lastName": "Medhurst",
//   "maidenName": "Smitham",
//   "age": 50,
//   "gender": "male",
//   "email": "atuny0@sohu.com",
//   "phone": "+63 791 675 8914",
//   "username": "atuny0",
//   "password": "9uQFF1Lh",
//   "birthDate": "2000-12-25",
//   "image": "https://robohash.org/Terry.png?set=set4",
//   "bloodGroup": "A-",
//   "height": 189,
//   "weight": 75.4,
//   "eyeColor": "Green",
//   "hair": {
//       "color": "Black",
//       "type": "Strands"
//   },
//   "domain": "slashdot.org",
//   "ip": "117.29.86.254",
//   "address": {
//       "address": "1745 T Street Southeast",
//       "city": "Washington",
//       "coordinates": {
//           "lat": 38.867033,
//           "lng": -76.979235
//       },
//       "postalCode": "20020",
//       "state": "DC"
//   },
//   "macAddress": "13:69:BA:56:A3:74",
//   "university": "Capitol University",
//   "bank": {
//       "cardExpire": "06/22",
//       "cardNumber": "50380955204220685",
//       "cardType": "maestro",
//       "currency": "Peso",
//       "iban": "NO17 0695 2754 967"
//   },
//   "company": {
//       "address": {
//           "address": "629 Debbie Drive",
//           "city": "Nashville",
//           "coordinates": {
//               "lat": 36.208114,
//               "lng": -86.58621199999999
//           },
//           "postalCode": "37076",
//           "state": "TN"
//       },
//       "department": "Marketing",
//       "name": "Blanda-O'Keefe",
//       "title": "Help Desk Operator"
//   },
//   "ein": "20-9487066",
//   "ssn": "661-64-2976",
//   "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
//   "crypto": {
//       "coin": "Bitcoin",
//       "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
//       "network": "Ethereum (ERC20)"
//   }
// }