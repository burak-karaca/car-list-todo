import React from 'react'

const car=(props)=> {
    return (
      
        <li className="list-group-item" id="lists">{props.children}<i onClick={props.deleteItem} className="fas fa-trash-alt text-danger"></i><i onClick={props.addItem} class="fas fa-plus-circle text-primary float-right mr-2"></i> </li> 
    
    )
}
export default car
