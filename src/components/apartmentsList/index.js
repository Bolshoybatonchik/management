import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import UserList from "../usersList";

const ApartmentsList = ({item}) => {
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

    return (<div>
        {item.flatList.map((item) => (
            <div key={item.addressId}>
                <div
                    className={classes.flat}
                    onClick={handleOpenApartment(item.addressId)}
                >
                    Квартира {item.flat}
                </div>
                {expandedApartmentIds.includes(item.addressId) && <UserList item={item}/>}
            </div>
        ))}
    </div>);
};
const useStyle = makeStyles({
    flat: {
        paddingLeft: '20px',
        cursor: "pointer",
    },
})

export default ApartmentsList;
