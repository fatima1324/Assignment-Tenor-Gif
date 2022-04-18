const text = document.getElementById("text");
const limit = document.getElementById('limit');
const Btn = document.getElementById("btn");
Btn.addEventListener('click', function () {
       container.innerHTML = '';
    let myRequest = new XMLHttpRequest();
    let search_term = text.value;
    var lmt = limit.value;
    if (search_term != '' && lmt != 0) {
        myRequest.open('GET', "https://g.tenor.com/v1/search?q=" + search_term + "&key=QQNBOC7T7ZUB&limit=" + lmt)
        myRequest.responseType = 'json'
        myRequest.onreadystatechange = function () {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                printData(myRequest.response)
                //console.log(myRequest.response)
            }
        }
        myRequest.send()
    }
})
function printData(data) {
    for (var i = 0; i < limit.value; i++) {
        console.log(data.results[i].media[0].mediumgif.url);
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'pics')
        let userImage = document.createElement('img')
        userImage.setAttribute('src', data.results[i].media[0].mediumgif.url)
        userImage.setAttribute('alt', data.results[i].media[0].mediumgif.url)
        userImage.setAttribute('class', 'image')
        newUser.appendChild(userImage)
        container.appendChild(newUser)
    }
}