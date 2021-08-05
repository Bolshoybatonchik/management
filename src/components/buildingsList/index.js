import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ApartmentsList from "../apartmentsList";

const BuildingList = ({item}) => {
    const [expandedApartmentIds, setExpandedApartmentIds] = useState([])
    const classes = useStyle()

    const handleOpenApartment = apartmentId => () => {
        let newExpandedApartmentIds = []
        if (expandedApartmentIds.includes(apartmentId)) {
            newExpandedApartmentIds = expandedApartmentIds.filter(expandedActionId => expandedActionId !== apartmentId)
        } else {
            newExpandedApartmentIds = expandedApartmentIds.concat(apartmentId)
        }
        setExpandedApartmentIds(newExpandedApartmentIds)
    }

    return (
        <>
            {item.houseList.map((item) => (
                <div key={item.houseId}>
                    <div
                        className={classes.building}
                        onClick={handleOpenApartment(item.houseId)}
                    >
                        Дом {item.addressId}
                    </div>
                    <div className={classes.apartment}>
                        {expandedApartmentIds.includes(item.houseId) && <ApartmentsList item={item}/>}
                    </div>
                </div>
            ))}
        </>
    )
}

const useStyle = makeStyles({
    building: {
        margin: '0 0 10px 10px',
        cursor: "pointer",
    },
    apartment: {
        paddingLeft: '20px'
    },
})

export default BuildingList
