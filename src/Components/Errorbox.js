import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from "react-redux" ;
 
export default function Errorbox() {
    const error = useSelector(state=>state.error)
    return (
        <div className={`errorBox Display-${error}`}>
            <span style={{marginRight:"8px"}}>
              <FontAwesomeIcon icon={faExclamationCircle}/>
            </span> 
               <p>Bitte Korrigieren Sie die markierten Eingabfelder</p>
        </div>
    )
}
