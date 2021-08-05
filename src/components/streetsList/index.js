import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

import { getApartmentsState } from "store/apartments/getters";
import BuildingList from "../buildingsList";

const StreetsList = () => {
    const {listApartments} = useSelector(getApartmentsState)
    const [expandedBuildingIds, setExpandedBuildingIds] = useState([])
    const classes = useStyle()

    const handleOpenBuilding = (buildingId) => {
        let newExpandedBuildingIds = []
        if (expandedBuildingIds.includes(buildingId)) {
            newExpandedBuildingIds = expandedBuildingIds.filter(expandedActionId => expandedActionId !== buildingId)
        } else {
            newExpandedBuildingIds = expandedBuildingIds.concat(buildingId)
        }
        setExpandedBuildingIds(newExpandedBuildingIds)
    }

    return (
        <div className={classes.content}>
            <div className={classes.title}>
                LIST APARTMENTS
            </div>
            {listApartments.map((item) => (
                <div key={item.streetId}>
                    <div
                        className={classes.street}
                        onClick={() => handleOpenBuilding(item.streetId)}
                    >
                        Улица {item.streetName}
                    </div>
                    {expandedBuildingIds.includes(item.streetId) && <BuildingList item={item}/>}
                </div>
            ))}
        </div>
    );
};

const useStyle = makeStyles({
    content: {
        minHeight: '600px',
        maxWidth: "600px",
        width: '100%',
        display: "flex",
        flexDirection: "column",
        padding: '10px 10px 10px 20px',
        boxSizing: "border-box",
        marginBottom: '20px',
        border: 'solid 1px green',
        borderRadius: '5px',
    },
    title: {
        margin: '0 auto 20px',
    },
    street: {
        marginBottom: '10px',
        cursor: "pointer",
    },
})

export default StreetsList;
