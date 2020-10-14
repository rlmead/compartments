import React from 'react';
import './App.css';
import Compartment from './Compartment.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCount: 0,
      compartment: null,
      itemsToShow: 'all',
    }
    // this.addListItem = this.addListItem.bind(this)
  }

  // declare an array with compartment background colors
  // to alternate when generating compartments

  // declare storage object with LocalStorage
  // let data = {
    // compartmentName: [
      // {
        // listItemName: 'string input by user',
        // id: itemCount,
        // done: false
      // }
    // ]
  // }


  // declare function addCompartment to add a new compartment array to the storage object
  // to be used on compartment input button click

  // declare function delCompartment to remove a compartment array
  // to be used on compartment X button click

  // declare function addListItem to add a new list item object to the storage object / compartment array
  // to be used on list input button click (add to buttons: onClick={this.addListItem.bind(this)}) ???
    // this.setState({itemCount: this.state.itemCount + 1});
    // add list item object to compartment's array

  // declare function delListItem to remove a list item object from the storage object / compartment array
  // to be used on list X button click

  render() {
    return (
      <>
        {/* header */}
        <h1>Compartments</h1>
        {/* add function to the following buttons to setState of itemsToShow */}
        <button>All</button><button>To Do</button><button>Completed</button>
        <Compartment compartmentName='fun' />
        {/* 
        COMPARTMENT INPUT onClick=addCompartment

        for each compartment in the data object:
            <Compartment
              itemsToShow={this.state.itemsToShow}
              compartmentName={name}
              data={data.compartmentName}
              addListItem={(???) => this.addListItem(???)}
              delListItem={(???) => this.delListItem(???)}
              delCompartment={(???) => this.delCompartment(???)}
              />
        */}
      </>
    );
  }
}

export default App;
