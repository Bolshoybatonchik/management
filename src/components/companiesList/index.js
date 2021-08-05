import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import { getCompaniesState } from 'store/companies/getters'
import { fetchListCompanies } from "store/companies/helpers";
import { fetchApartmentsList } from "store/apartments/helpers";
import { setActiveCompany } from "store/companies/actions";

const CompaniesList = () => {
    const {listCompanies, activeCompany} = useSelector(getCompaniesState)

    const dispatch = useDispatch()
    const classes = useStyle()

    useEffect(() => {
        dispatch(fetchListCompanies())
    }, [dispatch])

    const onClick = (id) => {
        dispatch(fetchApartmentsList(id))
        dispatch(setActiveCompany(id))
    }

    return (
        <div>
            {listCompanies.map(item => (
                <div
                    key={item.id}
                    style={{background: String(activeCompany) === String(item.id) ? 'green' : 'white'}}
                    className={classes.companies}
                    onClick={() => onClick(item.id)}
                >
                    {item.name}
                </div>))}
        </div>
    );
}

const useStyle = makeStyles({
    companies: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        maxWidth: "250px",
        padding: '10px 5px',
        marginBottom: '20px',
        border: 'solid 1px blue',
        borderRadius: '5px',
    }
})

export default CompaniesList;
