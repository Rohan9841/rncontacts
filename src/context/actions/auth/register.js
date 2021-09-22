import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptors"

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE
    })
}

export default (props) => (dispatch) => {

    dispatch({
        type: REGISTER_LOADING,
    })
    const {
        email,
        password,
        userName: username,
        firstName: first_name,
        lastName: last_name
    } = props;

    axiosInstance.post("auth/register", {
        email,
        password,
        username,
        first_name,
        last_name
    }).then((res) => {
        console.log("data: ", res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }).catch((err) => {
        console.log("error: ", err);
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : { error: "Something went wrong" }
        })
    })
}