import React from 'react';
import ListItem from './ListItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Box extends React.Component {
    constructor(props) {
        super();
        this.state = {
            display: true,
        }
        this.expandCollapse = this.expandCollapse.bind(this);
    }

    // function to expand/collapse this box
    expandCollapse() {
        this.setState({ display: !this.state.display })
    }

    render() {
        // determine which items to display according to itemView 
        let itemsToRender;
        switch (this.props.itemView) {
            case 'neglected':
                itemsToRender = this.props.data.filter(item => (item.done === false));
                break;
            case 'done':
                itemsToRender = this.props.data.filter(item => item.done);
                break;
            default:
                itemsToRender = this.props.data;
                break;
        }
        return (
            <>
                <div className='card-header border' id='headingOne'>
                    <div className='row'>
                        <div className='col-1'>
                            {
                                this.state.display
                                    ? <FontAwesomeIcon
                                        icon={faLockOpen}
                                        onClick={this.expandCollapse} />
                                    : <FontAwesomeIcon
                                        icon={faLock}
                                        onClick={this.expandCollapse} />
                            }
                        </div>
                        <div className='col-10'>
                            <h4 className='d-inline'>{this.props.boxName}</h4>
                        </div>
                        <div className='col-1'>
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                onClick={() => this.props.delBox(this.props.boxName)} />
                        </div>
                    </div>
                </div>
                <div
                    id='collapseOne'
                    className={'collapse ' + ((this.state.display) ? 'show' : 'hidden')}
                    aria-labelledby='headingOne'
                    data-parent='#accordionExample'>
                    <div className='card-body mb-3 border'>
                        <div className='input-group p-3'>
                            <input
                                id={'input-' + this.props.id}
                                data-box={this.props.boxName}
                                type='text'
                                className='form-control'
                                placeholder='lock something away'
                                aria-describedby='button-addon2'
                                onKeyPress={this.props.handleKeyPress}>
                            </input>
                            <div className='input-group-append'>
                                <button
                                    className='btn btn-outline-secondary'
                                    type='button'
                                    id='button-addon2'
                                    onClick={() => this.props.addListItem(this.props.boxName, document.getElementById('input-' + this.props.id))}>+
                                </button>
                            </div>
                        </div>
                        {/* render each list item in this box's data array */}
                        {
                            itemsToRender.map((item, index) => {
                                return (
                                    <ListItem
                                        boxName={this.props.boxName}
                                        data={item}
                                        id={'list-item-' + index}
                                        checkBox={this.props.checkBox}
                                        delListItem={this.props.delListItem}
                                        key={index}
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

export default Box;