import axios from "axios";

const loginUrl = "http://localhost:5000/v1/user/login";

export const userLogin = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(loginUrl, data);
			resolve(result.data);

			if (result.data.status === "success") {
				sessionStorage.setItem("accessToken", result.data.accessToken);
				localStorage.setItem(
					"crmRfToken",
					JSON.stringify({ rf: result.data.refreshToken })
				);
			}
		} catch (error) {
			reject(error.message);
		}
	});
};
