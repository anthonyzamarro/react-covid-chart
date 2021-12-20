import { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from './CountryPicker.module.css';

import { fetchCurrentCountries } from "../../API";

const CountryPicker = ({ handleCountryChange }) => {
    const [allCountries, setAllCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            const { countries } = await fetchCurrentCountries();
            setAllCountries(countries);
        }

        fetchCountries();
    }, [setAllCountries]);

    return (
        <FormControl className={styles.cp__container}>
            <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {allCountries.map((country, index) => {
                    return (
                        <option
                            value={country.name}
                            key={index}
                        >
                            {country.name}
                        </option>
                    )
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;