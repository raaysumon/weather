function data_fetch() {
    const cityName = document.getElementById('city').value.trim();
    if (!cityName) return alert('Enter City Name');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=492ac9c5809a30780347397e338e8d00&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') return alert('City Not Found');

            const { temp } = data.main;
            const icon = data.weather[0].icon;

            document.getElementById('result').innerHTML = `
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png"><br>
                <h3>Temperature is: ${temp}&deg;C</h3>
            `;
        });
}
