const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCuntries(data))
}
loadCountries()

const displayCuntries = (countries) => {
    // console.log(countries);
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countryDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.capital}</p>
        <button onclick = "loadContryByName('${country.name}')">Details</button>
        `
        countryDiv.appendChild(div);
    });
}
const loadContryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCuntryDetail(data[0]))
}

const displayCuntryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src = "${country.flag}">
    `
}