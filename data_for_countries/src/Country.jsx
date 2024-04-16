import { useState, useEffect } from 'react'
import Language from './Language.jsx'
import Weather from './Weather.jsx'

const Country= ({country, single}) => {
    const [weather, setWeather] = useState(single ? false : true)
    const languages = []
    for(var key in country.languages) {
        let language = country.languages[key]
        languages.push(language)
    }

    useEffect(() => {
        if (!weather && country) {
            Weather
            .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
            .then(response => {
                setWeather(response.data)
              })
        }
      }, [weather])

    if(weather && single){
        return (
            <div>
                <h3>Official name: {country.name.official}</h3>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>
                <p>languages:</p>
                {languages.map(language =>
                <Language key={language} language={language}/>
                )}
                <p><img src={country.flags.png} alt={country.flags.png} width={200}/></p>
                <h2>The weather in {country.capital}</h2>
                <p>temeperature is {weather.main.temp} Celsius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <p>wind {weather.wind.speed} m/s</p>
            </div>
        )
    }else if (country) {
        return (
            <div>
                <h3>Official name: {country.name.official}</h3>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>
                <p>languages:</p>
                {languages.map(language =>
                <Language key={language} language={language}/>
                )}
                <p><img src={country.flags.png} alt={country.flags.png} width={200}/></p>
            </div>
        )
    }
}

export default Country