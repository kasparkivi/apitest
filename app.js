let request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films',true)

request.onload = function ()  {
    let data = JSON.parse(this.response)
    if(request.status >= 200 && request.status < 400) {
        const root = document.getElementById('body')
        data.forEach(movie => {
            console.log(movie.description)
           const moviep = document.createElement('p')
            moviep.innerHTML = movie.title
            root.append(moviep)
        });

    } else {
        console.log(error)
    }
}

request.send()
