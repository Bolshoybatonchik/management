import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { deleteUser, } from "utils/api";
import { fetchApartmentsList } from "store/apartments/helpers";
import { getCompaniesState } from "store/companies/getters";
import ClientForm from "../ClientForm";

const UserList = ({item}) => {
    const {activeCompany} = useSelector(getCompaniesState)
    const dispatch = useDispatch()
    const classes = useStyle()

    const onClickDeleteUser = async (id) => {
        await deleteUser(id)
        await dispatch(fetchApartmentsList(activeCompany))
    }

    return (
        <>
            <ClientForm addressId={item.addressId}/>
            <div className={classes.content}>
                {item.clients.map((client) => (
                    <div key={client.id} className={classes.user}>
                        <div>{client.name}</div>
                        <button
                            className={classes.delete}
                            onClick={() => onClickDeleteUser(client.bindId)}
                        >
                            x
                        </button>
                    </div>))}
            </div>
        </>

    );
};

const useStyle = makeStyles({
    content: {
        display: "flex",
        paddingLeft: '20px',
        flexWrap: "wrap",
    },
    user: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: '200px',
        width: '100%',
        height: '50px',
        background: "yellow",
        margin: '0 10px 10px',
        padding: '0 10px 0 10px',
        boxSizing: "border-box",
    },
    input: {
        maxWidth: '200px',
        width: '100%',
        height: '50px',
        margin: '0 10px 10px 30px',
    },
    button: {
        width: 'fit-content',
        height: '40px',
        backgroundColor: '#6183e9',
        color: 'white',
        border: "none",
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#61b2e9',
        }
    },
    delete: {
        width: '20px',
        height: '20px',
    }
})

export default UserList;
