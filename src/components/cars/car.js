import React from 'react'

import AddFeatures from './addFeatures'

const car=(props)=> {
    return (
      <div className="">
        <li className="list-group-item list-items" id="lists">{props.children}
          <i onClick={props.deleteItem} className="fas fa-trash-alt text-danger"></i>
          <i onClick={AddFeatures} className="fas fa-plus-circle text-primary float-right mr-2"></i> </li> 
        <div id="list-features"></div>
        </div>
        )
}


export default car
