import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ListItem(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='form-check col-1'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        id={'check-' + props.id}
                        onClick={() => props.checkBox(props.boxName, props.data.id)}
                        checked={props.data.done} />
                </div>
                <div className='col-10 text-left'>
                    <label
                        className='form-check-label'
                        htmlFor='defaultCheck1'>
                        <p
                            style={{ textDecoration: ((props.data.done) ? 'line-through' : '') }}>
                            {props.data.name}
                        </p>
                    </label>
                </div>
                <div className='col-1'>
                    <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => props.delListItem(props.boxName, props.data.id)}/>
                </div>
            </div>
        </div>

    )
}

export default ListItem;