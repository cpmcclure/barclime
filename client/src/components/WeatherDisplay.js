const WeatherDisplay = ( { temp, pressure, humidity } ) => {
    return (
        <section className="container-fluid weather">
			<section className="row">
				<section className="col display">
					<h4>Temp</h4>
					<span>{temp}</span>
				</section>
				<section className="col display">
					<h4>Pressure</h4>
					<span>{pressure}</span>
				</section>
				<section className="col display">
					<h4>Humidity</h4>
					<span>{humidity}</span>
				</section>
			</section>
		</section>
    )
}

export default WeatherDisplay