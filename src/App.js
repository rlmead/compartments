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
    this.addCompartment = this.addCompartment.bind(this);
    // this.addListItem = this.addListItem.bind(this)
  }

  // declare a function to change view with viewButtons
  setView(view) {
    this.setState({ itemView: view })
  }

  // declare function addCompartment to add a new compartment array to the storage object
  // to be used on compartment input button click - and componentDidMount?
  addCompartment(compartmentName) {
    window.localStorage.setItem(compartmentName,'');
    // console.log(localStorage);
  }
  
  // declare function addListItem to add a new list item object to the storage object / compartment array
  // to be used on list input button click (add to buttons: onClick={this.addListItem.bind(this)}) ???
  // this.setState({itemCount: this.state.itemCount + 1});
  // add list item object to compartment's array
  // addListItem(compartmentName) {
  //   let existingToDos = (localStorage.getItem(compartmentName)) : JSON.parse(localStorage.getItem(compartmentName)) : [];
  //   console.log(existingToDos);
  // }
  

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


  // declare function delCompartment to remove a compartment array
  // to be used on compartment X button click

  // declare function delListItem to remove a list item object from the storage object / compartment array
  // to be used on list X button click

  render() {
    return (
      <>
        {/* header */}
        <h1>compartments</h1>
        {/* render buttons that will setState of itemView */}
        {
          // generate buttons dynamically using props.pages
          this.viewButtons.map((item, key) => {
            return (
              <button
                className={'m-2 btn ' + ((this.state.itemView === item) ? ' btn-primary' : 'btn-secondary')}
                onClick={() => this.setView(item)}
                key={key}
              >
                {item}
              </button>
            )
          })
        }
        {/* COMPARTMENT INPUT onClick=addCompartment */}
        <div className='input-group p-3'>
          <input id='compartmentInput' type='text' className='form-control' placeholder='add new compartment' aria-label='Recipient&apos;s username' aria-describedby='button-addon2'></input>
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' id='button-addon2' onClick={() => this.addCompartment(document.getElementById('compartmentInput').value)}>+</button>
          </div>
          {/* <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' id='button-addon2' onClick={() => this.addListItem(document.getElementById('compartmentInput').value)}>-</button>
          </div> */}
        </div>

        {/* for each compartment in the data object:
            <Compartment
              itemView={this.state.itemView}
              compartmentName={name}
              data={data.compartmentName}
              addListItem={(???) => this.addListItem(???)}
              delListItem={(???) => this.delListItem(???)}
              delCompartment={(???) => this.delCompartment(???)}
              /> */}

      </>
    );
  }
}

export default App;
