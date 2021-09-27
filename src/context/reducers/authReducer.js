import {
    CLEAR_AUTH_STATE,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "../../constants/actionTypes";

const authReducer = (state, { type, payload }) => {

    switch (type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case LOGOUT_USER:
            return {
                loading: false,
                data: null,
                error: null,
                isLoggedIn: false
            }
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null
            }
        default:
            return state;
    }
}

export default authReducer;