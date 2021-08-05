import axios from "./axios";

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`HousingStock/bind_client/${id}`)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export const createUser = async (data) => {
    try {
        const response = await axios.post('HousingStock/client', data)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export const updateFlat = async (data) => {
    try {
        const response = await axios.put('HousingStock/bind_client', data)
        return response.data

    } catch (e) {
        alert(e)
    }
}

export const getApartments = async (companyId) => {
    try {
        const response = await axios.get('HousingStock', {params: {companyId: companyId}})
        return response.data
    } catch (e) {
        alert(e)
    }
}

export const getCompanies = async () => {
    try {
        const response = await axios.get('Request/companies')
        return response.data
    } catch (e) {
        alert(e)
    }
}


