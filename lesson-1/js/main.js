const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, title: 'Notebook', price: 2000},
    {id: 6, title: 'Mouse', price: 20},
    {id: 7, title: 'Keyboard', price: 200},
    {id: 8, title: 'Gamepad', price: 50},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>$${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

/*const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};*/

/*сокращаем функцию*/

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
};

renderPage(products);