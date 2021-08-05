import { SetActiveCompany, SetCompaniesListData } from "./types";

export const setCompaniesList = (data) =>({
    type:SetCompaniesListData,
    payload:data
})

export const setActiveCompany = (data) =>({
    type:SetActiveCompany,
    payload:data
})
