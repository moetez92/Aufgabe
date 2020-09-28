import React, { useState } from 'react'
import {errorAction} from "../Actions/errorAction"
 import {isEmail,isPlz,isHausnr} from "../Helpers/Helpers"
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
 
const failSaveButton =   <Link className="btn-2" to="modify" onClick={()=>dispatch(errorAction())}>User Anlegen</Link>
const successSaveButton =   <Link className="btn-2" to="success" >User Anlegen</Link>
 const saveButton= isHausnr(hausnr)&&isEmail(email)&&isPlz(plz)?successSaveButton:failSaveButton



 const failCancelButton = <Link to="modify" className="btn-3"  onClick={()=>dispatch(errorAction())}>Bearbeiten</Link>
 const successCancelButton =   <Link to="modify" className="btn-3">Bearbeiten</Link>
  const cancelButton= isHausnr(hausnr)&&isEmail(email)&&isPlz(plz)?successCancelButton:failCancelButton

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
          <input    value={vorname} className="add-input"   placeholder="Vorname" disabled/>
          <input type="text"   value={nachname} className="add-input"   placeholder="Nachname" disabled/>
          </div>
          
         <div className="row">
           <input  className="email add-input"    value={email}  placeholder="Email" disabled/>
         </div>
          <div className="row grid third">
          <input type="text"    className="add-input"  value={str} placeholder="Straße" disabled/>
          <input type="text" className="add-input"  value={hausnr}   placeholder="Hsnr." disabled />
          </div>
          <div className="row grid fourth">
          <input type="text" className="add-input"    value={plz}  placeholder="PLZ" disabled />
          <input type="text" className="add-input"    value={ort}  placeholder="Ort" disabled />
          </div>
          <div className="row grid fifth">
           {cancelButton}
           {saveButton}
          </div>
          </div>
           </div>
 )}
        </div>
       
      
    )
}
