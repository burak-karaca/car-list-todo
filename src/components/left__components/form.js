import React from 'react'

const form =(props)=>{    
        return (
            <div className="upNav w-100">
            <form onSubmit={props.handleSubmit} >
           {/* <p className="cars text-primary">Total Cars:{props.count} </p>*/} 
              <input className="input form-control ml-5 mt-5 w-75 float-left"  onChange={props.handleChange} value={props.value}/>
              <button className="btn btn-primary ml-4 mt-5 float-left" onClick={props.countCars}>Submit</button>
            </form>
          </div>
          )

}
export default form;