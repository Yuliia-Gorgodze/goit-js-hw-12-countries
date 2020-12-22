import refs from './refs';
import country from '../src/country.hbs';
import requestBack from './requestBack';
import listNameCountry from '../src/listName.hbs';
import { debounce } from 'debounce';
import errorRef from './notifications';
import countryBack from '../js/requestBack';

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch() {
  refs.list.innerHTML = '';
  refs.containerCountry.innerHTML = '';
  errorMessege()
}
function errorMessege () {
  const nameInput = refs.input.value;
  console.log(nameInput)
  if (nameInput === '') {
    errorRef.errorSintaxsisError();
    return;
  }
  countryBack(nameInput).then(countryCard).catch(errorRef.errorNotFound());
}
function countryCard(nameCountry) {
  if (nameCountry.length > 1 && nameCountry.length < 10) {
    nameCountry.map(c =>
      refs.list.insertAdjacentHTML('afterbegin', listNameCountry(c)),
    );
    return;
  }
  if (nameCountry.length > 10) {
    errorRef.errorMessege();
    return;
  }
  if (nameCountry.length < 2 && nameCountry.length !== 0) {
    const con = country(nameCountry[0]);
    refs.containerCountry.insertAdjacentHTML('afterbegin', con);
  }
}
