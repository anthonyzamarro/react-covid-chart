import { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from './CountryPicker.module.css';

import { fetchCurrentCountries } from "../../API";

const CountryPicker = () => {
    const [allCountries, setAllCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            const { countries } = await fetchCurrentCountries();
            setAllCountries(countries);
            console.log(allCountries);
        }

        fetchCountries();
    }, []);
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                {allCountries.map((country, index) => {
                    return (
                        <option value={country.name} key={index}>{country.name}</option>
                    )
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;