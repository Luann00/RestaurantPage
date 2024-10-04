import "./styles.css";

const content = document.getElementById("content");

function displayContact() {

    const locationField = document.createElement('div');
    locationField.id = 'menuField'

    const locationHeader = document.createElement('h1');
    locationHeader.innerHTML = "Contact us"


    const location = document.createElement('p');
    location.innerHTML = `
    <strong>Jon Doe </strong> <br>
    1234 Elm Street <br>
    Springfield, IL 62701 <br>
    USA <br>
    Phone: (555) 123-4567 <br>
    Email: johndoe@example.com`;

locationField.appendChild(location);

content.appendChild(locationField);

}


export default displayContact;