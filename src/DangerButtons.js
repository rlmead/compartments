import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

function DangerButtons(props) {
    return (
        <div className='row mt-4'>
            <div className='col-1 offset-1'>
                <FontAwesomeIcon icon={faBolt} style={{ fontSize: 2 + 'em' }} />
            </div>
            <div className='col-8'>
                {
                    // generate buttons dynamically using props.pages
                    Object.keys(props.dangerousButtons).map((item, key) => {
                        return (
                            <button
                                key={'button-' + key}
                                className='m-2 btn btn-danger'
                                id={key}
                                onClick={props.dangerousButtons[item]}
                            >
                                {item}
                            </button>
                        )
                    })
                }
            </div>
            <div className='col-1'>
                <FontAwesomeIcon icon={faBolt} style={{ fontSize: 2 + 'em' }} />
            </div>
        </div>
    )
}

export default DangerButtons;