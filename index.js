fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // console.log(data.urls.full)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        console.log(err)
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1736159427273-189b0e49f19b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzY5NTQ1ODh8&ixlib=rb-4.0.3&q=85)`
        document.getElementById("author").textContent = `By: Andrea De Santis`
    })

/**
Challenge: Get current data on a cryptocurrency from the list below
* bitcoin
* dogecoin
* ethereum
* litecoin

1. Search the API docs for an endpoint that will 
get you the "current data for a coin"
(https://www.coingecko.com/api/documentations/v3#/)

2. Execute a test request from the API docs and skim through 
the data for anything that you may find interesting to use
in the dashboard
*/

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

