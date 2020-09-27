import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
 
export default function Errorbox() {
    return (
        <div className="errorBox">
            <span style={{marginRight:"8px"}}>
              <FontAwesomeIcon icon={faExclamationCircle}/>
            </span> 
               <p>Bitte Korrigieren Sie die markierten Eingabfelder</p>
        </div>
    )
}
