import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './../Rating';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Rating></Rating>,div)
 })