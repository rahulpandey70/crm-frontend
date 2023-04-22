import axios from "axios";
import {
	getUserPending,
	getUserSuccess,
	getUserError,
} from "../slice/userSlice";

export const getUserProfile = () => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(getUserPending());
			const result = await axios.get("http://localhost:5000/v1/user", {
				headers: {
					Authorization: sessionStorage.getItem("accessToken"),
				},
			});
			resolve(result.data);
			dispatch(getUserSuccess(result.data));
		} catch (error) {
			reject(error.message);
			dispatch(getUserError(error.message));
		}
	});
};

// GET http://localhost:5000/v1/rf-token

export const getNewAccessToken = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { rf } = JSON.parse(localStorage.getItem("crmRfToken"));
			const result = await axios.get("http://localhost:5000/v1/rf-token", {
				headers: {
					Authorization: rf,
				},
			});

			if ((result.data.status = "success")) {
				sessionStorage.setItem("accessToken", result.data.accessJwtToken);
			}

			resolve(true);
		} catch (error) {
			if (error.message === "Request failed with status code 403") {
				localStorage.removeItem("crmRfToken");
			}
			reject(false);
		}
	});
};

export const userLogout = async () => {
	try {
		await axios.delete("http://localhost:5000/v1/user/logout", {
			headers: {
				Authorization: sessionStorage.getItem("accessToken"),
			},
		});
	} catch (error) {
		throw new Error(error);
	}
};
