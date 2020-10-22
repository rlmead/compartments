import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

function DangerButtons(props) {
    return (
        <>
            <div className='col-3'></div>
            {
                // generate buttons dynamically using props.dangerButtons data
                props.dangerButtons.map((item, index) => {
                    return (
                        <div className='col-2' key={index}>
                            <FontAwesomeIcon
                                icon={item.icon}
                                className='text-danger'
                                onClick={() => item.function(props.boxName)}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}


export default DangerButtons;