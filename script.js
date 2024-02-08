const cardThumbnails = document.querySelectorAll('.card-img-top')
const cardTitle = document.querySelectorAll('.card-title')
const cardText = document.querySelectorAll('.card-text')

fetch('posterData.json').then(res => res.json()).then(data => {
    cardThumbnails[0].setAttribute('src') = `assets/${data['posters'][1]['url']}`
})