import React from "react";
import styled from "./ContactListItem.module.css"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";

export const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch()

    const handleDelete = () => dispatch(deleteContact(id))

    return (
        <div className={styled.item__container}>
            <span>{name}: {number}</span>
            <button className={styled.filterList__btn} onClick={handleDelete}>Delete</button>
        </div>        
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    removeFromContacts: PropTypes.func
}

//onClick={removeFromContacts}