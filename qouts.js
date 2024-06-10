function loadQots (){
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data =>displayData(data))
}
function displayData(qoutes){
    let qoute = document.getElementById('qouts');
    qoute.innerHTML = qoutes.quote;
}

loadQots();