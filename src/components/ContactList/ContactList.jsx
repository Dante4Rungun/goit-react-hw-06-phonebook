import { ContactListItem } from "components/ContactListItem/ContactListItem";
import React from "react";
import styled from "./ContactList.module.css"
import PropTypes, { object } from 'prop-types';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)

    return (
        <ul id="filter-list" className={styled.filterList}>
            {contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(contact => (
                <li key={contact.id} className={styled.filterList__item}>
                    <ContactListItem id={contact.id} name={contact.name} number={contact.number} /> 
                </li>                   
            ))}
        </ul>   
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(object),
    filter: PropTypes.string,
    removeFromContacts: PropTypes.func    
}

//
//removeFromContacts={removeFromContacts} 