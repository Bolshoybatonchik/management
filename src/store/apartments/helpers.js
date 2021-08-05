import { setApartmentsList } from "./actions";
import { formattedData } from 'utils/normalaze-data'
import { getApartments } from "utils/api";

export const fetchApartmentsList = (companyId) => async (dispatch) => {
    const response = await getApartments(companyId)
    dispatch(setApartmentsList(formattedData(response)))
}
