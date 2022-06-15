import axios from "axios";

export const Api = async (country) => {
	console.log(country);

	let url = `https://restcountries.com/v3.1/name/${country}`;
	try {
		const res = await axios({
			method: "GET",
			url
		});
		const data = await res.data[0];
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const ApiAllContry = async () => {
	let url = `https://restcountries.com/v3.1/all/`;
	try {
		const res = await axios({
			method: "GET",
			url
		});
		const data = await res.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};
