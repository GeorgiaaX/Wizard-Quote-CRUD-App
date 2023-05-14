const update = document.querySelector("#update-button")
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener("click", () => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Lord Voldemort',
            quote:'Avada Kedavra ',
        })
    })
    .then(res =>  {
        if(res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
})

deleteButton.addEventListener("click", () => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify ({
            name: 'Lord Voldemort',
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then(response => {
        if (response === 'No quote to delete') {
            messageDiv.textContent = 'No Lord Voldemort quote to delete'
        } else {
        window.location.reload()
        }
    })
    .catch(error => console.error(error))
})


