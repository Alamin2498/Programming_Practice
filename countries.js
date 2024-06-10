function loadCountries (){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountrie(data))
}

function displayCountrie(country){
console.log(country);
}

loadCountries();