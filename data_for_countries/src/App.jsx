import { useState, useEffect } from 'react'
import Service from './Service.jsx'
import Country from './Country.jsx'
import CountryName from './CountryName.jsx'


const App = () => {
  const [countries, setCountries]= useState(null)
  const [countryName, setCountryName] = useState('')
  const [showCountries, setShowCountries] = useState(true)

  useEffect(() => {
    if (!countries) {
      Service
        .getAll()
        .then(response => {
          setCountries(response.data)
        })
    }
  }, [countries])

  let filterCountries = []
  if (countries && countryName){
    filterCountries = showCountries ? countries : countries.filter(country => country.name.official.toLowerCase().includes(countryName.toLowerCase()) === true)
  }

  const handleCountrySearch = (event) => {
    setCountryName(event.target.value)
    if(showCountries){
      setShowCountries(!showCountries)
    }
  }


  if (0 == filterCountries.length) {
    return (
      <div>
        <form>
          <div>
            find countries:
              <input 
                value={countryName}
                onChange={handleCountrySearch}
              />
          </div>
        </form>
      </div>
    )
  }else if(filterCountries.length == 1){
    return (
      <div>
        <form>
          <div>
            find countries:
              <input 
                value={countryName}
                onChange={handleCountrySearch}
              />
          </div>
        </form>
        <Country country={filterCountries[0]} single={true} />
      </div>
    )
  }else if (1 < filterCountries.length && filterCountries.length < 10) {
    return (
      <div>
        <form>
          <div>
            find countries:
              <input 
                value={countryName}
                onChange={handleCountrySearch}
              />
          </div>
        </form>
        {filterCountries.map(country =>
        <CountryName key={country.name.official} country={country} single={false} />
        )}
      </div>
    )
  }else{
    return (
      <div>
        <form>
          <div>
            find countries:
              <input 
                value={countryName}
                onChange={handleCountrySearch}
              />
          </div>
        </form>
        Too many mathes, specify another filter
      </div>
    )
  }
}

export default App