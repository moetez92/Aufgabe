import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {errorAction} from "../Actions/errorAction"
import {validAction} from "../Actions/errorAction"
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import "./spinner.css"
export default function LoadUser() {


const dispatch = useDispatch();
 const [vorname, setvorname] = useState(localStorage.getItem("vorname"));
 const [nachname, setnachname] = useState(localStorage.getItem("nachname"));
 const [email, setemail] = useState(localStorage.getItem("email"));
 const [str, setstr] = useState(localStorage.getItem("str"));
 const [hausnr, sethausnr] = useState(localStorage.getItem("hausnr"));
 const [plz, setplz] = useState(localStorage.getItem("plz"));
 const [ort, setort] = useState(localStorage.getItem("ort"));
 const [error,seterror] = useState(false)

 
 
 

 
 const loading = useSelector(state=>state.load)
  const img = useSelector(state=>state.img)
  const background={
    backgroundImage: "url(" + img + ")",
    backgroundRepeat  : 'no-repeat',
     backgroundPosition: 'center',
     backgroundSize: 'cover' 
  }

const spinnerform =loading?"spinnerform":"";
 


 

console.log(spinnerform)
 
    return (
       
               
        <div className={`form ${spinnerform}`}>

         {loading&&( <div className="spinner"> </div>)}
          
         {!loading&&(


        <div >

 

<div className="avatar-box">
               <div style={background} className="avatar-circle">
              
               </div>
           </div>
           <div className="inputs"> 
           <div className="row grid">
          <input    value={vorname}    placeholder="Vorname" disabled/>
          <input type="text"   value={nachname}   placeholder="Nachname" disabled/>
          </div>
          
         <div className="row">
           <input  className="email"   value={email}  placeholder="Email" disabled/>
         </div>
          <div className="row grid third">
          <input type="text"     value={str} placeholder="Straße" disabled/>
          <input type="text"  value={hausnr}   placeholder="Hsnr." disabled />
          </div>
          <div className="row grid fourth">
          <input type="text"    value={plz}  placeholder="PLZ" disabled />
          <input type="text"    value={ort}  placeholder="Ort" disabled />
          </div>
          <div className="row grid fifth">
          <Link to="bearbeitung" className="btn-3">Bearbeiten</Link>
          <div className="btn-2">User ablegen</div>
          </div>
         
         
    
          
           </div>











        </div>




         )}
        </div>
       
      
    )
}
