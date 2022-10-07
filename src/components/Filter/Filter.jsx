import React from "react";
import styled from "./Filter.module.css"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setValueFilter } from "redux/actions";

export const Filter = () => {
    const dispatch = useDispatch()

    const handleOnChange = (event) => dispatch(setValueFilter(event.target.value))

    return (
        <input type="text" id="contact-search" className={styled.filter__search} onChange={handleOnChange} placeholder="find contacts by name..."/>
    )
}

Filter.propTypes = {
    setFilter: PropTypes.func
}