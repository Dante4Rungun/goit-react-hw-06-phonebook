import React from "react";
import styled from "./ContactForm.module.css"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addContact } from "redux/actions";

export const ContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        dispatch(addContact(form.elements.name.value, form.elements.number.value))
        form.reset()
    }

    return (
        <form className={styled.ContactForm} onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className={styled.ContactForm__input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="input name ..."
                    required
                />
                <input
                    id="number"
                    type="tel"
                    name="number"
                    className={styled.ContactForm__input}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="input number ..."
                    required
                />
            <button type="submit" className={styled.ContactForm__submit}>Add Contact</button>
        </form>
    )
}
//onClick={addContact}
ContactForm.propTypes = {
    addContact: PropTypes.func
}