console.log('Number of categories: ', document.querySelectorAll('#categories .item').length);

let elements = document.querySelectorAll('#categories .item');
    elements.forEach(item => {
        console.log('Category: ', item.querySelector('h2').textContent);
        console.log('Elements: ', item.querySelectorAll('li').length);
    });