import React, { Component } from 'react'
import './App.css';
import Form1 from './components/form'



export default class App extends Component {

  constructor(){

    super();

    this.state={
      datafrom:[]
    }
console.log("constructor")
  };

  handleSubmit=(e)=>{

    e.preventDefault();

    let formData ={

      
      BatchName:e.target[0].value,
      Category:e.target[1].value,
      from:e.target[2].value,
      Subject:e.target[3].value,
      to:e.target[4].value,
      NLS:e.target[5].value,
      Details:e.target[6].value

    }
    
    console.log('Batch Form Data=' ,formData);

    this.setState({datafrom:formData})
    

  }

  render() {

    console.log("from state", this.state.datafrom);  
  
    return (
      
      <div>
        <Form1 handleSubmit={this.handleSubmit} />
        
      </div>
    )
  }
}
