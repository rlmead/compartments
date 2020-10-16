import React from 'react';

function ListItem(props) {
    // passed from Compartment.js:
        // data={item_data}
        // delListItem={this.props.delListItem}
        // itemsToShow={this.props.itemsToShow}
    return (
        // radio button to toggle done or not
        // render list item as paragraph, struck-through if done, otherwise with normal styling
        <p>{props.data.name}</p>
        // (props.data.done) ? <p style={{text-decoration: "line-through"}}>{props.data.name}</p> : <p>{props.data.name}</p>
        // X button to remove list item
        )
}

export default ListItem;