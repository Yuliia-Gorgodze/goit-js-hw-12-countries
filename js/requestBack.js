// import refs from './refs'

// function countryBack(name) {
//    console.log(name)
//     fetch(`https://restcountries.eu/rest/v2/name/ukraine`)
//       .then(response => {
//        response.json();
//       })
//     }
      

function countryBack(name) {

  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
     .then(response => response.json())
   }
  export default countryBack