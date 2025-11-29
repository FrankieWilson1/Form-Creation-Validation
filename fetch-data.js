async function fetchUserData() {
    // Define the api url
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch data using try-catch block
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        users = await response.json();

        // Clear the loading Messages
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = user.name;

            // Use appendChild to attach a child element to its parent element
            userList.appendChild(li);
        });

        // 
        dataContainer.append(userList);

    // Error Handling
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', fetchUserData);