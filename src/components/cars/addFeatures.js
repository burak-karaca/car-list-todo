import React from 'react'
import ReactDOM from 'react-dom'
import AddFeature from './addFeature'
function AddFeatures() {
const element = (
    <AddFeature></AddFeature>
);
ReactDOM.render(element,document.querySelector('#list-features'));
}
export default AddFeatures;