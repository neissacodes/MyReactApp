import React from 'react';
import './App.css';

class ControlledInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            submit: ''
        } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    };
render() {
    return (
        <div id = 'tools'>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.input}
                onChange={this.handleChange} />
              <button type='submit'>Submit!</button>
            </form>
            <h1>{this.state.submit}</h1>
          </div>
        );
      }
};



class App extends React.Component {
    render() {
      return (
        <div id = 'header'>
          <h1>
              Tools and Technologies I am learning this month:
          </h1>
          <ControlledInput />
          
        </div>
      );
    }
  };
  

export default App;
