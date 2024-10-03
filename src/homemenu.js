const content = document.getElementById("content");



function displayHome() {
    const headerHomePage = document.createElement('h1');
    headerHomePage.id = 'headerHomePage'

    headerHomePage.innerHTML = "Welcome to Restaurant Sedra!"

    const mainTextBorder = document.createElement('div');
    mainTextBorder.id = 'mainTextBorder'
    const mainText = document.createElement('p');
    mainText.innerHTML = "At Restaurant Sedra, we believe that great food is about more than just flavor—it’s about experience. Nestled in the heart of Cologne, our restaurant offers a warm and inviting atmosphere where you can enjoy a meal with family and friends!"


    mainTextBorder.appendChild(mainText);


    const secondTextBorder = document.createElement('div');
    secondTextBorder.id = 'secondTextBorder'
    const secondText = document.createElement('p');
    secondText.innerHTML = "Come and experience the flavors of Sedra. Whether you’re stopping by for a quick lunch, celebrating a special occasion, or enjoying a leisurely dinner, we look forward to welcoming you!"
    secondTextBorder.appendChild(secondText)




    content.appendChild(headerHomePage)
    content.appendChild(mainTextBorder)
    content.appendChild(secondTextBorder)


}


export default displayHome;