import refs from './refs';
import country from '../src/country.hbs';
import listNameCountry from '../src/listName.hbs';
import { debounce } from 'debounce';

refs.input.addEventListener('input', debounce(countryBack, 500));
// refs.input.addEventListener('input', debounce( 500));

function countryBack() {
  const name = refs.input.value;
  
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(countryCard)
    .catch(error => console.error('ERROR', error));
}


function countryCard (nameCountry){
   console.log(nameCountry)
  if (nameCountry.length > 2 && nameCountry.length < 10) {
    const con = nameCountry.map(c => listNameCountry(c));
    refs.list.insertAdjacentHTML('afterbegin', con);
    return;
  }
  const con = country(nameCountry[0]);
  refs.input.insertAdjacentHTML('afterend', con);
}
export default { countryBack };

//function countryCard(nameCountry) {
//  const con = country(nameCountry[0]);
//  refs.input.insertAdjacentHTML('afterend', con);
//}
//function listCountry(arrayCountry) {
//  const con = arrayCountry.map(c => listNameCountry(c));
 // refs.list.insertAdjacentHTML('afterbegin', con);
//}