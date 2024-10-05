import "./styles.css";

const content = document.getElementById("content");

function displayContact() {

    const locationField = document.createElement('div');
    locationField.id = 'menuField'

    const location2Field = document.createElement('div');
    location2Field.id = 'menuField'

    const location3Field = document.createElement('div');
    location3Field.id = 'menuField'

    


    const location = document.createElement('p');
    location.innerHTML = `
    <strong>Jon Doe </strong> <br>
    1234 Elm Street <br>
    Springfield, IL 62701 <br>
    USA <br>
    Phone: (555) 123-4567 <br>
    Email: johndoe@example.com`;

    const location2 = document.createElement('p');
    location2.innerHTML = `
    <strong>Jon Doe </strong> <br>
    1234 Elm Street <br>
    Springfield, IL 62701 <br>
    USA <br>
    Phone: (555) 123-4567 <br>
    Email: johndoe@example.com`;


    const location3 = document.createElement('p');
    location3.innerHTML = `
    <strong>Jon Doe </strong> <br>
    1234 Elm Street <br>
    Springfield, IL 62701 <br>
    USA <br>
    Phone: (555) 123-4567 <br>
    Email: johndoe@example.com`;


    locationField.appendChild(location);

    location2Field.appendChild(location2);

    location3Field.appendChild(location3);



    content.appendChild(locationField);
    content.appendChild(location2Field);
    content.appendChild(location3Field);


}


export default displayContact;