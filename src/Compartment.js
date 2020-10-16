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
    //     itemView={this.state.itemView}
    //     data={this.state.data}
    //     compartmentName={item}
    //     addListItem={this.addListItem}
    //     key={'compartment-' + key}
    //     />

    // function to expand/collapse this compartment
    expandCollapse() {
        this.setState({ display: !this.state.display })
    }

    render() {
        // determine which items to display according to itemView 
        let itemsToRender;
        switch (this.props.itemView) {
            case 'all':
                itemsToRender = this.props.data;
                break;
            case 'to do':
                itemsToRender = this.props.data.filter(item => (item.done === false));
                break;
            case 'done':
                itemsToRender = this.props.data.filter(item => item.done);
                break;
        }
        return (
            <>
                <div className='card-header border' id='headingOne'>
                    <h4 className='d-inline'>{this.props.compartmentName}</h4>
                    <button
                        className='btn btn-link'
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
                    className={'collapse ' + ((this.state.display) ? 'show' : 'hidden')}
                    aria-labelledby='headingOne'
                    data-parent='#accordionExample'>
                    <div className='card-body mb-3 border'>
                        <div className='input-group p-3'>
                            <input id={'input-' + this.props.id}
                                type='text' className='form-control' placeholder='compartmentalize a thought' aria-describedby='button-addon2'></input>
                            <div className='input-group-append'>
                                <button
                                    className='btn btn-outline-secondary'
                                    type='button'
                                    id='button-addon2'
                                    onClick={() => this.props.addListItem(this.props.compartmentName, document.getElementById('input-' + this.props.id).value)}>+
                                </button>
                            </div>
                        </div>
                        {/* render each list item in this compartment's data array */}
                        {
                            itemsToRender.map((item, key) => {
                                return (
                                    <ListItem
                                        compartmentName={this.props.compartmentName}
                                        data={item}
                                        id={'list-item-' + key}
                                        checkBox={this.props.checkBox}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Compartment;