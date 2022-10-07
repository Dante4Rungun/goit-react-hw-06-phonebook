import React from "react";
import styled from "./Phonebook.module.css"
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export const Phonebook = () => {
    
    return (
        <div className={styled.phonebook}>
            <h1 className={styled.phonebook__title}>Phonebook</h1 >
            <ContactForm/>
            <h2 className={styled.phonebook__contacts}>Contacts</h2>
            <Filter/>
            <ContactList/>
        </div>
    )
}