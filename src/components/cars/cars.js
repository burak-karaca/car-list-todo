import React from 'react'
import Car from "./car"
    const cars = (props) => (props.cars.map((car,index)=>{
        console.log(car)
        return (
            <Car  key ={index} deleteItem
            
            y
            ={()=>props.delete(index)}> {car} </Car>
        )}
        )
        );
    export default cars  

