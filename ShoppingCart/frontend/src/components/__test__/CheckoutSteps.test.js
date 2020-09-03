import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutSteps from './../CheckoutSteps';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckoutSteps></CheckoutSteps>,div)
 })