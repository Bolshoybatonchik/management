import { setCompaniesList } from "./actions";
import { getCompanies } from "utils/api";

export const fetchListCompanies = () => async (dispatch) => {
    const response = await getCompanies()
    dispatch(setCompaniesList(response))
}
