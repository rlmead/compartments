import React from 'react';
import './App.css';
import Compartment from './Compartment.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCount: 0,
      compartment: null,
      itemView: 'all',
    };
    this.viewButtons = [
      'all',
      'to do',
      'done'
    ];
    this.setView = this.setView.bind(this);
    console.log(window.localStorage);
    // this.addListItem = this.addListItem.bind(this)
  }

  // declare a function to change view with viewButtons
  setView(view) {
    this.setState({ itemView: view })
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
        {/* render buttons that will setState of itemView */}
        {
          // generate buttons dynamically using props.pages
          this.viewButtons.map((item) => {
            return (
              <button
                className={'btn ' + ((this.state.itemView === item) ? ' btn-primary' : 'btn-secondary')}
                onClick={() => this.setView(item)}
              >
                {item}
              </button>
              //                onClick={() => props.setPage(index)}
            )
          })
        }

        <Compartment compartmentName='fun' />
        {/* 
        COMPARTMENT INPUT onClick=addCompartment

        for each compartment in the data object:
            <Compartment
              itemView={this.state.itemView}
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
