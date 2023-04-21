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
