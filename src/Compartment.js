import React from 'react';
import ListItem from './ListItem.js';

class Compartment extends React.Component {
    constructor(props) {
        super();
        this.state = {
            display: false,
        }
        this.expandCollapse = this.expandCollapse.bind(this);
    }
    // passed through in props:
    // <Compartment
    // itemView={this.state.itemView}
    // compartmentName={compartment}
    // data={JSON.parse(window.localStorage[compartment])}
    // addListItem={this.addListItem}
    // key={'compartment-'+key}
    // // delListItem={(???) => this.delListItem(???)}
    // // delCompartment={(???) => this.delCompartment(???)}
    // />

    // function to expand/collapse this compartment
    expandCollapse() {
        this.setState({ display: !this.state.display })
    }

    // function to render each list item in data array
    // renderListItem(item_data) {
    //     return (
    //         <ListItem
    //             data={item_data}
    //             delListItem={this.props.delListItem}
    //             itemsToShow={this.props.itemsToShow}
    //         />
    //     )
    // }

    render() {
        return (
            <>
                <div class='card-header' id='headingOne'>
                    {this.props.compartmentName}
                    <button
                    class='btn btn-link'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                    onClick={this.expandCollapse}>
                    {this.state.display ? '-' : '+'}
                    </button>
                </div>
                <div
                id='collapseOne'
                class={'collapse ' + ((this.state.display) ? 'show' : 'hidden')}
                aria-labelledby='headingOne'
                data-parent='#accordionExample'>
                    <div class='card-body'>
                        'hello'
                    </div>
                </div>
            </>
        )
    }
}

export default Compartment;