import React, { Component } from 'react';
import Form from "./left__components/form"
import Cars from "./cars/cars"

class Left extends React.Component {
     state = {
        input: '',
        items: [],
        count:0
      }
    handleChange = (e) => {
      this.setState({
        input: e.target.value
      })
    }
   
  
    handleSubmit = (e)  => {
      e.preventDefault();
      this.setState((prevState,props)=>{
        return {
          input: '',
          items: [...this.state.items,this.state.input],
          count:prevState.count+1
      }})
    }
    deleteItem = (index) => {
           const cars = this.state.items.slice();
           cars.splice(index,1);
           this.setState((prevState)=>{
             return{
              items: cars,
              count:prevState.count-1
           }})   
          }
    
    render() {
      return (
        <div className="left">
          <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          value={this.state.input} count={this.state.count}/>
          <ul className="list-group">  <Cars  cars={this.state.items} delete= {this.deleteItem}></Cars> </ul>
        </div>
      )
    }
  }
  
  
  

export default Left;