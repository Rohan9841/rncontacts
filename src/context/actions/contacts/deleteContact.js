import { DELETE_CONTACT_FAIL, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptors"

export default (id) => (dispatch) => (onSuccess) => {

    dispatch({
        type: DELETE_CONTACT_LOADING,
    });

    axiosInstance
        .delete(`/contacts/${id}`)
        .then(() => {
            console.log('item has been deleted from the database.')
            console.log("calling dispatch");
            dispatch({
                type: DELETE_CONTACT_SUCCESS,
                payload: id
            });
            console.log("calling callbasck")
            onSuccess();
        })
        .catch((err) => {
            dispatch({
                type: DELETE_CONTACT_FAIL,
                payload: err.response ? err.response.data : { error: "Something went wrong, try again." }
            });
        });
}