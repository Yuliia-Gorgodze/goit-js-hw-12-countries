

function countryBack() {
    const name = nameCountry();
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        return response.json();
      })
    }
      
    export default {countryBack}