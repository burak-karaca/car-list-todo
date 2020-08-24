import React, { Component } from 'react';
import ford from '../pictures/logom.jpg'
class Navbar extends Component {

state = { }

    render() { 
        return (
 	    <div>
            <div className="thenavbar bg-light ">
            <img src={ford} className="img float-left"></img>
            <input type="text" placeholder="Search your car" className="form-control w-50 h-50 float-left" id="navbar-input"></input>
            <button className="navbar-button btn-primary btn float-left" id="navbar-button">Search</button>
            </div>
            </div>
        )
    }
}
export default Navbar;

    /*
    state = {
        count:0,
        tags: ["tag1","tag2","tag3"],
    };

    renderTags(){
        if(this.state.tags.length===0) return <p>there are no tags!</p>;
        return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>;
    };
    handleIncrement = () => {
       
       this.setState({ count :this.state.count + 1 })
    };
    resetElement = () => {
        this.setState({ count : this.state.count = 0 })
    }


    <span id="num" className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
    <button onClick={this.resetElement} className ="btn btn-info btn-sm ml-2">Reset</button>
    
      formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
     getBadgeClasses(){
         let classes = "badge m-2 font-size-base badge-";
         classes += this.state.count ===0 ? "warning" : "primary";
         return classes;
     }
    
    */