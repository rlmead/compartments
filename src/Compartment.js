import React from 'react';
import ListItem from './ListItem.js';

class Compartment extends React.Component {
    constructor(props) {
      super();
      this.state = {
        // toggle expansion of inner list
        display: false,
      }
      // this.handleClick = this.handleClick.bind(this)
    }

    // passed through in props:
    // itemsToShow = all / todo / completed
    // compartmentName = this compartment's name
    // data= this compartment's data array
    // addListItem = function from App.js
    // delListItem = function from App.js
    // delCompartment = function from App.js

    // function to expand/collapse this compartment
    expandCollapse() {
        this.setState({display: !this.display});
    }

    // function to render each list item in data array
    renderListItem(item_data) {
        return (
            <ListItem
                data={item_data}
                delListItem={this.props.delListItem}
                itemsToShow={this.props.itemsToShow}
            />
        )
    }

    render() {
        return (
            <h2>{this.props.compartmentName}</h2>

        // rework all this bootstrappy stuff

        // <div class="accordion" id="accordionExample">
        //   <div class="card">
        //     <div class="card-header" id="headingOne">
        //       <h2 class="mb-0">
        //           compartment name
        //       </h2>
        //      <h3>number of items currently showing</h3> (do some fancy footwork to generate this from the data in this array, using the length of the array and the current value of itemsToShow)
        //       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //      onClick: expandCollapse
        //      determine the content of this button (+ or -) depending on this.state.display
        // </button>
        //     </div>

        //     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        //       <div class="card-body">

        //          input: addListItem (with + button to add)

        //          for (let i = 0; i < this.props.data.length; i++) {
            //          renderListItem(this.props.data[i])
            //      }

        //          button to mark all items in this compartment as incomplete (set every list item's 'done' value to 'false')
        //          button to mark all items in this compartment as complete (set every list item's 'done' value to 'true')
        //          button to remove all completed items in this compartment (delListItem every item with a 'done' value of 'true')
        //       </div>
        //     </div>
        //   </div>

        )
    }
}

export default Compartment;