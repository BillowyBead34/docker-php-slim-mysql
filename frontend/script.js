const btnFetch = document.getElementById('btnFetch');

btnFetch.addEventListener('click', () => {
    fetch('http://localhost:8080/users')
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
})
