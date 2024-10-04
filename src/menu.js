import "./styles.css";

const content = document.getElementById("content");

function displayMenu() {

    const menu1Field = document.createElement('div');
    menu1Field.id = 'menuField'

    const menu2Field = document.createElement('div');
    menu2Field.id = 'menuField'

    const menu3Field = document.createElement('div');
    menu3Field.id = 'menuField'


    const menu1Header = document.createElement('h1');
    menu1Header.innerHTML = "Appetizers"

    const menu2Header = document.createElement('h1');
    menu2Header.innerHTML = "Main Courses"

    const menu3Header = document.createElement('h1');
    menu3Header.innerHTML = "Desserts"


    const menu1 = document.createElement('p');
    menu1.innerHTML = `
    <li>Garlic Bread with Cheese - $4.99</li>
    <li>Mozzarella Sticks - $6.49</li>
    <li>Crispy Calamari - $7.99</li>
    <li>Buffalo Wings (6 pieces) - $8.99</li>
    <li>Spinach and Artichoke Dip - $6.99</li>
     <li>Stuffed Mushrooms - $7.49</li>`;

    const menu2 = document.createElement('p');
    menu2.innerHTML = `
    <li>Margherita Pizza - $12.99</li>
    <li>Spaghetti Carbonara - $13.49</li>
    <li>Grilled Chicken Caesar Salad - $10.99</li>
    <li>BBQ Bacon Cheeseburger with Fries</li>
    <li>Ribeye Steak with Mashed Potatoes - $19.99</li>
    <li> Veggie Stir-Fry with Tofu - $11.49</li> `;

    const menu3 = document.createElement('p');
    menu3.innerHTML = `
    <li>Classic Tiramisu - $5.99 </li>
    <li>Chocolate Lava Cake</li>
    <li>Vanilla Ice Cream (2 scoops) </li> 
    <li>New York Cheesecake - $5.49</li>
    <li>Apple Pie with Vanilla Ice Cream - $6.49</li>
    <li>Mixed Berry Sorbet - $4.99</li>`;

    menu1Field.appendChild(menu1Header);
    menu1Field.appendChild(menu1);

    menu2Field.appendChild(menu2Header);
    menu2Field.appendChild(menu2);

    menu3Field.appendChild(menu3Header);
    menu3Field.appendChild(menu3);

    content.appendChild(menu1Field)
    content.appendChild(menu2Field)
    content.appendChild(menu3Field)


}

export default displayMenu;