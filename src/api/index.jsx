import axios from "axios";
const Api = axios.create({
	baseURL: "http://localhost:8000",
	headers: {
		"Access-Control-Allow-Origin": "*",
	},
});
export default Api;
