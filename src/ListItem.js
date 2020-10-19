import React from 'react';

function ListItem(props) {
    // passed from Compartment.js:
    // data={item_data}
    // delListItem={this.props.delListItem}
    // itemsToShow={this.props.itemsToShow}
    return (
        <div className='form-check text-left'>
        <input
        className='form-check-input'
        type='checkbox'
        id={'check-'+props.id}
        onClick={() => props.checkBox(props.compartmentName,props.data.id)}
        checked={(props.data.done)} />
        <label
        className='form-check-label'
        htmlFor='defaultCheck1'>
            <p
            style={{textDecoration: ((props.data.done) ? 'line-through' : '')}}>
                {props.data.name}
            </p>
        </label>
        </div>
        // (props.data.done) ? <p style={{text-decoration: 'line-through'}}>{props.data.name}</p> : <p>{props.data.name}</p>
        // X button to remove list item
    )
}

export default ListItem;