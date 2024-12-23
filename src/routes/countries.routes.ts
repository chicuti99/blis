import {Router} from 'express';
import { CountryDetail } from '../modules/countries/useCases/GetCountriesDetails';

const restCountries = Router();



const countryDetails = new CountryDetail();
restCountries.get("/",countryDetails.GetCountryDetails);
export {restCountries}