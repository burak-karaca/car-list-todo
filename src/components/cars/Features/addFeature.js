import React from 'react'
const addFeature =(props)=>{    
        return (
            <div>
            <form>
              <input className="input form-control ml-1 mt-1 w-25 float-left"/>
              <button style={props.style} className="btn btn-primary ml-1 mt-1 float-left" >Add</button>
            </form>
          </div>
          )

}


export default addFeature;