import React from 'react';
import ReactDOM from 'react-dom';

/*
import component_name from './filename'
...
*/
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      //states
      //...
    }

  }

  render(){
    return (<div>
      {/*Put components in this div.*/}
      Put Shit Here.
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
