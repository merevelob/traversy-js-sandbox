const clearBtn = document.querySelector('#clear');

const items = document.querySelectorAll('.items > li');

// console.log(items);

function clearItems() {
    items.forEach(item => item.remove());
}

clearBtn.addEventListener('click', clearItems);