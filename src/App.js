import React from 'react';
import './App.css';
import Box from './Box.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCount: 0,
      itemView: 'all',
      data: {},
    };
    this.viewButtons = [
      'all',
      'neglected',
      'done'
    ];
    this.setView = this.setView.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addBox = this.addBox.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.delBox = this.delBox.bind(this);
    this.delListItem = this.delListItem.bind(this);
    this.lockUnlock = this.lockUnlock.bind(this);
  }

  // declare a function to change view with viewButtons
  setView(view) {
    this.setState({ itemView: view })
  }

  // load existing boxes from localStorage as necessary
  componentDidMount() {
    let storedData = window.localStorage.getItem('data')
    let storedCount = window.localStorage.getItem('itemCount')
    if (storedData) {
      this.setState({ data: JSON.parse(storedData) })
      this.setState({ itemCount: JSON.parse(storedCount) })
    } else {
      window.localStorage.setItem('data', JSON.stringify({}))
      window.localStorage.setItem('itemCount', JSON.stringify(this.state.itemCount))
    }
  }

  // keep localStorage up to date with this.state.currentPage
  componentDidUpdate() {
    window.localStorage.setItem('data', JSON.stringify(this.state.data))
    window.localStorage.setItem('itemCount', JSON.stringify(this.state.itemCount))
  }

  // declare function to handle "enter" keypress
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.id === 'boxInput') {
        this.addBox(e.target);
      } else {
        // console.log(e.target.dataset.box);
        this.addListItem(e.target.dataset.box, e.target);
      }
    }
  }

  // declare function addBox to add a new box array to the storage object
  // to be used on box input button click - and componentDidMount?
  addBox(boxInput) {
    if (boxInput.value in this.state.data || boxInput.value === '') {
      alert('please choose a unique, non-empty box name');
    } else {
      let existingBoxes = this.state.data;
      existingBoxes[boxInput.value] = {display: true, list: []};
      this.setState({ data: existingBoxes });
      boxInput.value = '';
    }
  }

  // declare function addListItem to add a new list item object to the storage object / box array
  addListItem(boxName, listItemInput) {
    if (listItemInput.value === '') {
      alert('please enter a non-empty thought');
    } else {
      let newCount = this.state.itemCount + 1;
      this.setState({ itemCount: newCount });
      let existingToDos = this.state.data;
      existingToDos[boxName]['list'].unshift({
        'name': listItemInput.value,
        'id': this.state.itemCount,
        'done': false,
      })
      this.setState({ data: existingToDos });
      listItemInput.value = '';
    }
  }

  // declare function checkBox to mark a list item as done
  checkBox(boxName, listItemId) {
    let allData = this.state.data;
    let itemIndex = this.state.data[boxName]['list'].findIndex(item => item.id === listItemId);
    allData[boxName]['list'][itemIndex].done = !allData[boxName]['list'][itemIndex].done;
    this.setState({ data: allData })
  }

  // declare function delBox to remove a box
  delBox(boxName) {
    let updatedData = this.state.data;
    console.log(updatedData);
    delete updatedData[boxName];
    console.log(updatedData);
    this.setState({ data: updatedData })
  }

  // declare function delListItem to remove a list item
  delListItem(boxName, listItemId) {
    let itemIndex = this.state.data[boxName]['list'].findIndex(item => item.id === listItemId);
    let updatedData = this.state.data;
    updatedData[boxName]['list'].splice(itemIndex, 1);
    this.setState({ data: updatedData });
  }

  lockUnlock(boxName) {
    console.log(boxName);
    let updatedData = this.state.data;
    updatedData[boxName]['display'] = !updatedData[boxName]['display'];
    this.setState({ data: updatedData });
  }

  render() {
    let boxes = Object.keys(this.state.data).reverse();
    return (
      <>
        {/* header */}
        <div className='container'>
          <h1>to don't</h1>
          {/* render buttons that will setState of itemView */}
          {
            // generate buttons dynamically using props.pages
            this.viewButtons.map((item, key) => {
              return (
                <button
                  key={'button-' + key}
                  className={'m-2 btn ' + ((this.state.itemView === item) ? ' btn-primary' : 'btn-secondary')}
                  onClick={() => this.setView(item)}
                >
                  {item}
                </button>
              )
            })
          }
          {/* BOX INPUT onClick=addBox */}
          <div className='input-group p-3'>
            <input
              id='boxInput'
              type='text'
              className='form-control'
              placeholder='add a new lockbox'
              aria-describedby='button-addon2'
              onKeyPress={this.handleKeyPress}>
            </input>
            <div className='input-group-append'>
              <button
                className='btn btn-outline-secondary'
                type='button'
                id='button-addon2'
                onClick={() => this.addBox(document.getElementById('boxInput'))}>+
            </button>
            </div>
          </div>
          {/* box accordion parent divs */}
          <div className="accordion" id="accordionExample">
            <div className="card">
              {/* create a new box for each one listed in this.state.data */}
              {
                boxes.map((item, index) => {
                  return (
                    <Box
                      itemView={this.state.itemView}
                      data={this.state.data[item]['list']}
                      display={this.state.data[item]['display']}
                      boxName={item}
                      handleKeyPress={this.handleKeyPress}
                      addListItem={this.addListItem}
                      checkBox={this.checkBox}
                      delBox={this.delBox}
                      delListItem={this.delListItem}
                      lockUnlock={this.lockUnlock}
                      id={'box-' + index}
                      key={index}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
