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
 * Challenge: Pull down the cryptocurrency data for dogecoin from the 
 * CoinGecko API and log it to the console
 * 
 * Also add a .catch() method to console any errors that might occur to the console
 */

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        /**
         * Challenge: Add the name and icon of the cryptocurrency
         * to the upper-left of the dashboard page
         * 
         * Use `data.name` and `data.image.small` to access that info
         */
        console.log(data)
        document.getElementById("logo").src = data.image.small
        document.getElementById("crypto").textContent = data.name


    })
    .catch(err => {
        console.log(err)
    })

