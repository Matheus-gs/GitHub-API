
const requestUserRepos = (user) => {

    user = window.document.getElementById('user').value;

    const xhr = new XMLHttpRequest(),
        url = `https://api.github.com/users/${user}`

    xhr.open('GET', url, true)

    xhr.onload = function () {

        const data = JSON.parse(this.response),
            baseList = document.querySelectorAll('li'),
            cardList = document.getElementsByClassName('cardUser')[0].setAttribute('class', 'cardUser active');

        baseList[0].innerText = `User: @${data.login}`
        baseList[1].innerText = `Name: ${data.name}`
        baseList[2].innerText = `Bio: ${data.bio} `
        baseList[3].innerText = `Location: ${data.location}`
    }
    xhr.send();
}
