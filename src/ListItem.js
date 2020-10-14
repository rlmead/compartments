import React from 'react';

function ListItem(props) {
    return (
        <p>{props.data.name}</p>
        // radio button to toggle done or not
        // render list item as paragraph, struck-through if done, otherwise with normal styling
        // (props.data.done) ? <p style={{text-decoration: "line-through"}}>{props.data.name}</p> : <p>{props.data.name}</p>
        // X button to remove list item
        )
}

export default ListItem;