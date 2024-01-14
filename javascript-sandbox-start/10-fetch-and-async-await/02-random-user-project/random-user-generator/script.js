const pAll = document.querySelectorAll('.text-xl');
const img = document.querySelector('.flex > img');
const btn = document.getElementById('generate');

function getInfo(results) {
    return {
        name: results.name.first + ' ' + results.name.last,
        email: results.email,
        phone: results.phone,
        location: results.location.city + ', ' + results.location.country,
        age: results.dob.age,
        pic: results.picture.large,
        gender: results.gender,
    };
}

function addInfo2DOM(results) {
    const user = getInfo(results);
    img.setAttribute('src', user.pic);
    if (user.gender === 'male') {
        document.body.style.backgroundColor = 'darkblue';
    } else {
        document.body.style.backgroundColor = 'purple';
    }
    for (let i = 0; i < pAll.length; i++) {
        const textNode = document.createTextNode(Object.values(user)[i]);
        pAll[i].appendChild(textNode);
    }
}

function generateUser() {
    showSpinner();
    pAll.forEach(p => p.lastChild.remove());
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            hideSpinner();
            addInfo2DOM(data.results[0]);
        });
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

btn.addEventListener('click', generateUser);

generateUser();
