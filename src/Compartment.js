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
        console.log(this.props.id);
        return (
            <>
                <div class='card-header border' id='headingOne'>
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
                    <div className='input-group p-3'>
                        <input id={'input-' + this.props.id} type='text' className='form-control' placeholder='compartmentalize a thought' aria-describedby='button-addon2'></input>
                        <div className='input-group-append'>
                            <button
                                className='btn btn-outline-secondary'
                                type='button'
                                id='button-addon2'
                                onClick={() => this.props.addListItem(this.props.compartmentName, document.getElementById('input-' + this.props.id).value)}>+
                                </button>
                        </div>
                    </div>
                    <div class='card-body mb-3 border'>
                        {/* render each list item in this compartment's data array */}
                        {
                            this.props.data.map((item, key) => {
                                return (
                                    <ListItem
                                        data={item}
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