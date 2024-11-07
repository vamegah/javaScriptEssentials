const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $15', 'Oatmeal- $18', 'Frittata- $22'];
const mainCourseMenu = ['Steak- $20', 'Pasta- $10', 'Burger- $30', 'Salmon- $44'];
const dessertMenu = ['Cake- $10', 'Ice Cream- $2', 'Pudding- $16', 'Fruit Salad- $6'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;