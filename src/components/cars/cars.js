import React from 'react'
import Car from "./car"
import Addfeature from "./Features/addFeatures"
    const cars = (props) => (props.cars.map((car,index)=>{
        return (
            <div>
                <Car  key ={index} deleteItem={()=>props.delete(index)} AddFeatures={props.createFeatures}> {car}  </Car>
                <Addfeature features={props.Features}/>
            </div>
        )}
        )
        );
    export default cars  

