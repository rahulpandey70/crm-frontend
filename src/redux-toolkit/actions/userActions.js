import axios from "axios";
import {
	getUserPending,
	getUserSuccess,
	getUserError,
} from "../slice/userSlice";

const userProfileUrl = "http://localhost:5000/v1/user";

export const getUserProfile = () => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(getUserPending());
			const result = await axios.get(userProfileUrl, {
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
