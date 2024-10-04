const content = document.getElementById("content");



function displayHome() {

    const mainTextBorder = document.createElement('div');

    const headerHomePage = document.createElement('h1');
    headerHomePage.id = 'headerHomePage'

    headerHomePage.innerHTML = "Welcome to Restaurant Sedra!"
    mainTextBorder.id = 'mainTextBorder'
    const mainText = document.createElement('p');
    mainText.innerHTML = "At Restaurant Sedra, we believe that great food is about more than just flavor—it’s about experience. Nestled in the heart of Cologne, our restaurant offers a warm and inviting atmosphere where you can enjoy a meal with family and friends!"



    mainTextBorder.appendChild(headerHomePage)
    mainTextBorder.appendChild(mainText);


    const secondText = document.createElement('p');
    secondText.innerHTML = "Come and experience the flavors of Sedra. Whether you’re stopping by for a quick lunch, celebrating a special occasion, or enjoying a leisurely dinner, we look forward to welcoming you!"
    mainTextBorder.appendChild(secondText)


    //styleContent();




    const openingTimes = document.createElement('p');
    openingTimes.innerHTML =
        "Monday: 10:00 AM - 10:00 PM<br>" +
        "Tuesday: 10:00 AM - 10:00 PM<br>" +
        "Wednesday: 10:00 AM - 10:00 PM<br>" +
        "Thursday: 10:00 AM - 10:00 PM<br>" +
        "Friday: 10:00 AM - 10:00 PM<br>" +
        "Saturday: 9:00 AM - 11:00 PM<br>" +
        "Sunday: 10:00 AM - 8:00 PM";


    mainTextBorder.appendChild(openingTimes)



    content.appendChild(mainTextBorder)





}

/*
function styleContent() {
    content.style.border = "3px solid grey"
    content.style.borderRadius = "25px"
    content.style.padding = "15px"
    content.style.backgroundColor = "black"
    content.style.width = "50%"
    content.style.fontFamily = "Arial"
    content.style.fontSize = "1.5vw"
    content.style.margin = "2%"
}
*/

export default displayHome;