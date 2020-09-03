import React from 'react';
import ReactDOM from 'react-dom';
import PaypalButton from './../PaypalButton';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PaypalButton></PaypalButton>, div)
 })