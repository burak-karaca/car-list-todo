import React, { Component } from 'react';
import Form from "./left__components/form"
import Cars from "./cars/cars"

class Left extends React.Component {
     state = {
        cars:{
          input: '',
          items: [],
          count:0
      },
      features:[{
        input:[],
        style:[]}
      ]
      }
    handleChange = (e) => {
      this.setState({
        cars:{input: e.target.value,
        items: [],
        count:0}

      })
    }
   
    CreateFeature=()=>{
      
      this.setState(
        
      )
    }
    handleSubmit = (e)  => {
      e.preventDefault();
      this.setState((prevState,props)=>{
        return {
          cars:{
            input: '',
            items: [...this.state.cars.items,this.state.cars.input],
            count:prevState.cars.count+1
          }
      }})
    }
     deleteItem = (index) => {
           const cars = this.state.cars.items.slice();
           cars.splice(index,1);
           this.setState((prevState)=>{
             return{
              cars:{
                input:prevState.cars.input,
                items: cars,
                count:prevState.cars.count-1
              }
           }})   
          }
          addItem = (item) => {
          }

    render() {
      return (
        <div className="left">
          <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          value={this.state.cars.input} count={this.state.cars.count}/>
        
          <ul className="list-group">  <Cars createFeatures={this.CreateFeature} Features={this.state.features} cars={this.state.cars.items} delete= {this.deleteItem}> </Cars> 
         
         

          </ul>
         
        </div>
        
      )
    }
  }


export default Left;
