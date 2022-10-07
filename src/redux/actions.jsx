import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", (name, number) => {
    return {
        payload: {
            id: nanoid(),
            name,
            number,
        },
    }  
})

export const deleteContact = createAction("contacts/deleteContact", ContactID => {
    return {
        payload: ContactID,
    }
})

export const setValueFilter = createAction("filters/setValueFilter",(value) => {
    return {
        payload: value,
    }
})