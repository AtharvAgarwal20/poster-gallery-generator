const container = document.querySelectorAll('.wrapper')
const navbar = document.querySelector('.navbar')

fetch('posterData.json').then(res => res.json()).then(data => {
    const posters = data['posters']
    for (let i = 0; i < posters.length; i++) {
        let newCard = document.createElement('div')
        let newThumbnail = document.createElement('img')
        let newBody = document.createElement('div')
        let newHeading = document.createElement('h5')
        let newContent = document.createElement('p')

        newCard.classList.add('card')
        newThumbnail.classList.add('card-img-top')
        newBody.classList.add('card-body')
        newHeading.classList.add('card-title')
        newContent.classList.add('card-text')

        newThumbnail.src = `assets/${posters[i]['url']}`
        newHeading.innerText = posters[i]['title']
        newContent.innerText = `Poster Code: ${i + 1}`

        newCard.appendChild(newThumbnail)
        newBody.appendChild(newHeading)
        newBody.appendChild(newContent)
        for (let j = 0; j < posters[i]['tags'].length; j++) {
            let newTag = document.createElement('span')
            newTag.classList.add('badge', 'rounded-pill', 'text-bg-primary')
            newTag.innerText = posters[i]['tags'][j]
            newBody.appendChild(newTag)
        }
        newCard.appendChild(newBody)
        container[0].appendChild(newCard)
    }
    const cards = document.querySelectorAll('.card')
    for (let card of cards) {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '100'
            console.log("Run")
        })
        card.addEventListener('mouseleave', () => {
            setTimeout(() => {
                card.removeAttribute('style')
            }, 150)
        })
    }
}).catch(error => {
    console.log(error)
    alert("Unexpected Error")
})

window.addEventListener('load', () => {
    console.log('load')
    const preloader = document.querySelector('#preloader')
    preloader.style.display = 'none'
    navbar.style.display = 'block'
    container[0].style.display = 'flex'
})