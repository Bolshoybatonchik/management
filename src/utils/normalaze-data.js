const addStreetList = (list) => {
    const data = []
    list.forEach(item => {
        const isAdded = data.some(street => street.streetId === item.streetId)
        if (!isAdded) {
            data.push({
                streetId: item.streetId,
                streetName: item.streetName,
            })
        }
    })
    return data
}

const addHouseList = (list, listStreet) => {
    const data = []
    list.forEach(item => {
        const isAdded = data.some(street => street.houseId === item.houseId)
        if (!isAdded) {
            data.push({
                houseId: item.houseId,
                streetId: item.streetId,
                addressId: item.addressId,
            })
        }
    })
    return listStreet.map(item => {
        const newItem = {...item}
        return {
            ...newItem,
            houseList: data.filter(house => house.streetId === newItem.streetId)
        }
    })
}

const addFlatList = (list, listStreet) => {
    const data = []
    list.forEach(item => {
        const isAdded = data.some(street => street.flat === item.flat)
        if (!isAdded) {
            data.push({
                flat: item.flat,
                houseId: item.houseId,
                bindId: item.bindId,
                clients: item.clients,
                addressId: item.addressId,
            })
        }
    })
    return listStreet.map(item => {
        const newItem = {...item}
        const newHouseList = newItem.houseList.map(house => {
            const newHouse = {...house}
            return {
                ...newHouse,
                flatList: data.filter(flatItem => flatItem.houseId === newHouse.houseId)
            }
        })
        return {
            ...newItem,
            houseList: newHouseList
        }
    })
}

export const formattedData = (list) => {
    let data = addStreetList(list)
    data = addHouseList(list, data)
    data = addFlatList(list, data)
    return data
}
