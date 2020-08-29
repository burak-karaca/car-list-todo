import React from 'react'

import AddFeature from './addFeature'

const addFutures=(props)=>(props.features.map((feature,index)=>{
    return (
        <AddFeature  key ={index} style={feature.style}> </AddFeature>
    )}
    )
    );
export default addFutures  