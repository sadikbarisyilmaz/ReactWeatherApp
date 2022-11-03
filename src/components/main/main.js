import useCity from '../../cityContext'

function Main() {

  const { weatherData } = useCity()

  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

  return (
    <div id='cardArea'>
      <ul>
        {weatherData !== undefined && weatherData.map((item, index) => (
          <li key={index}>
            <div id={index} className={index === 0 ? "bg-dark card border-white opacity" : "card opacity"}>
              <p>{days[`${new Date(item["dt"] * 1000).getDay()}`]}</p>
              <span>
                <img src={`http://openweathermap.org/img/wn/${item["weather"][0]["icon"]}@2x.png`} alt="" />
              </span>
              <p>{Math.round(item.temp.day)}°</p>
              <p>Max: {Math.round(item.temp.max)}° Min: {Math.round(item.temp.min)}°</p>
            </div>
          </li>
        )).filter(item => Number(item.key) < 7)}
      </ul>
    </div>
  )
}

export default Main