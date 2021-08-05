import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { createUser, updateFlat } from "utils/api";
import { fetchApartmentsList } from "store/apartments/helpers";
import { getCompaniesState } from "store/companies/getters";
import { makeStyles } from "@material-ui/core/styles";

const ClientForm = ({addressId}) => {
    const {activeCompany} = useSelector(getCompaniesState)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const classes = useStyle()
    const isDisabled = name && email && phone

    const onSubmit = async () => {
        const data = {
            Name: name,
            Phone: phone,
            Email: email
        }

        const response = await createUser(data)
        if (response) {
            const flatData = {
                AddressId: addressId,
                ClientId: response?.id
            }
            await updateFlat(flatData)
            await dispatch(fetchApartmentsList(activeCompany))
            setName('')
            setEmail('')
            setPhone('')
        }
    }

    return (
        <div className={classes.content}>
            <span>Добавить жильца </span>
            <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                placeholder={'Имя'}
            />
            <input
                onChange={(event) => setEmail(event.target.value)}
                type={'email'}
                value={email}
                placeholder={'email'}
            />
            <input
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                placeholder={'Телефон'}
            />
            <button
                disabled={!isDisabled}
                onClick={onSubmit}
            >
                Добавить
            </button>
        </div>
    );
};

const useStyle = makeStyles({
    content: {
        maxWidth:'300px',
        width:'100%',
        display: 'flex',
        flexDirection: "column",
        margin:'0 auto 20px'
    },
})
export default ClientForm;
