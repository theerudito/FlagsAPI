import { useEffect, useState } from "react";
import { Api, ApiAllContry } from "./Helper";
import "../Component/styles.scss";

export const Country = () => {
	const [Search, setSearch] = useState("");
	const [country, setCountry] = useState([]);
	const [countrys, setCountrys] = useState([]);
	const [noBuscar, setNoBuscar] = useState(false);

	const getData = async (e) => {
		e.preventDefault();
		setNoBuscar(false);
		let result = await Api(Search);
		let data = {
			pais: result.name.common,
			republica: result.name.official,
			capital: result.capital[0],
			region: result.subregion,
			languages: result.languages,
			area: result.area,
			poblation: result.population,
			flag: result.flags.svg,
			lat: result.latlng[0],
			lon: result.latlng[1]
		};
		setCountry(data);
		setSearch("");
	};

	const getAllCounty = async () => {
		let result = await ApiAllContry();
		let ramdom = Math.floor(Math.random() * result.length);
		let data = {
			pais: result[ramdom].name.common,
			capital: result[ramdom].capital[0],
			republica: result[ramdom].name.official,
			flag: result[ramdom].flags.svg,
			region: result[ramdom].subregion,
			area: result[ramdom].area,
			poblation: result[ramdom].population,
			lat: result[ramdom].latlng[0],
			lon: result[ramdom].latlng[1]
		};

		setCountrys(data);
	};

	useEffect(() => {
		if (noBuscar === true) {
			getAllCounty();
			setCountrys();
		} else {
			setNoBuscar(false);
		}
	}, []);

	const onChange = (e) => {
		setSearch(e.target.value);
		setNoBuscar(true);
	};

	return (
		<>
			<div className="search">
				<input
					placeholder="Seach Country"
					value={Search}
					required
					onChange={onChange}
				/>
				{noBuscar === true ? (
					<button onClick={getData} type="submit">
						Search
					</button>
				) : null}
			</div>

			<div className="contenedor">
				<div className="flag">
					{countrys.flag ? (
						<img src={countrys.flag} alt="flag" className="image" />
					) : (
						<img src={country.flag} alt="flag" className="image" />
					)}
				</div>

				<div className="cuerpo">
					{countrys.pais ? (
						<p>
							Country:{""} {countrys.pais}{" "}
						</p>
					) : (
						<p>
							Country:{""}
							{country.pais}{" "}
						</p>
					)}

					{countrys.capital ? (
						<p>
							Capital:{""} {countrys.capital}{" "}
						</p>
					) : (
						<p>
							Capital:{""}
							{country.capital}{" "}
						</p>
					)}

					{countrys.republica ? (
						<p>
							Republic:{""} {countrys.republica}{" "}
						</p>
					) : (
						<p>
							Republic:{""}
							{country.republica}{" "}
						</p>
					)}

					{countrys.region ? (
						<p>Region: {countrys.region}</p>
					) : (
						<p>Region: {country.region}</p>
					)}

					{country ? (
						<p>
							Area: {""}
							{countrys.area} Km{" "}
						</p>
					) : (
						<p>
							Area: {""}
							{country.area} Km{" "}
						</p>
					)}

					{countrys.poblation ? (
						<p>
							Poblation:{""} {countrys.poblation}{" "}
						</p>
					) : (
						<p>
							Poblation:{""}
							{country.poblation}{" "}
						</p>
					)}

					{countrys.lat ? (
						<p>
							Lat: {""}
							{countrys.lat} {""}
							Lon: {""}
							{countrys.lon}
						</p>
					) : (
						<p>
							Lat: {""}
							{country.lat} {""}
							Lon: {""}
							{country.lon}
						</p>
					)}

					<p></p>
				</div>
			</div>
		</>
	);
};
