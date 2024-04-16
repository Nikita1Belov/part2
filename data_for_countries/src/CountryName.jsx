import './styles/country.css'
import Country from './Country.jsx'
import { useState } from 'react'

const CountryName = ({country, single}) => {
    const [countryState, setCountryState] = useState(false)

    return (
        <div>
            <div className='container'>
                <div className='text'>{country.name.official}</div>
                <div>
                    <button onClick={() => setCountryState(!countryState)}>{countryState ? 'hide' : 'show'}</button>
                </div>
            </div>
            <Country country={countryState ? country : false} single={single} />
        </div>
    )
}

export default CountryName