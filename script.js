// Wait for the HTML content to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Find the fetch button element and attach a click event listener
    const fetchButton = document.querySelector('.fetch-button');
    fetchButton.addEventListener('click', fetchUserData);
  });
  
  // Function to fetch user data from the API
  function fetchUserData() {
    // Send a GET request to the API endpoint
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        // Extract user data from the API response
        const user = data.results[0];
        const profilePicture = user.picture.large;
        const username = user.login.username;
        const fullName = `${user.name.first} ${user.name.last}`;
        const gender = user.gender;
        const dob = new Date(user.dob.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
        const email = user.email;
  
        // Call the updateCard function to populate the user details
        updateCard(profilePicture, username, fullName, gender, dob, address, email);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Function to update the user card with fetched data
  function updateCard(profilePicture, username, fullName, gender, dob, address, email) {
    // Find relevant elements in the DOM to update
    const profilePictureElement = document.querySelector('.profile-picture');
    const usernameElement = document.querySelector('.username');
    const fullNameElement = document.querySelector('.full-name');
    const genderElement = document.querySelector('.gender');
    const dobElement = document.querySelector('.dob');
    const addressElement = document.querySelector('.address');
    const emailElement = document.querySelector('.email');
  
    // Update elements with fetched user data
    profilePictureElement.src = profilePicture;
    usernameElement.textContent = username;
    fullNameElement.textContent = fullName;
    genderElement.textContent = gender;
    dobElement.textContent = dob;
    addressElement.textContent = address;
    emailElement.textContent = email;
  }
  