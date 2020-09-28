import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {errorAction} from "../Actions/errorAction"
import {validAction} from "../Actions/errorAction"
import {useDispatch} from "react-redux"
export default function Bearbeitung() {


const dispatch = useDispatch();
 const [vorname, setvorname] = useState(localStorage.getItem("vorname"));
 const [nachname, setnachname] = useState(localStorage.getItem("nachname"));
 const [email, setemail] = useState(localStorage.getItem("email"));
 const [str, setstr] = useState(localStorage.getItem("str"));
 const [hausnr, sethausnr] = useState(localStorage.getItem("hausnr"));
 const [plz, setplz] = useState(localStorage.getItem("plz"));
 const [ort, setort] = useState(localStorage.getItem("ort"));
 const [error,seterror] = useState(false)

 
 
 

 // this part is for handling the input in every input field
 const handelVorname=(e)=>{
  setvorname(e.target.value);
   
}
const handelNachname=(e)=>{
  setnachname(e.target.value);
 
}
const handelStr=(e)=>{
  setstr(e.target.value);
  
}
const handelHausnr=(e)=>{
  sethausnr(e.target.value);
  
}
const handelPlz=(e)=>{
  setplz(e.target.value);
   
}
const handelOrt=(e)=>{
  setort(e.target.value);

}
const handelEmail=(e)=>{
  setemail(e.target.value);
   
}

 

 


 

  
 
    return (
       
               
        <div className="form">
        
        <div className="avatar-box">
               <div  className="avatar-circle">
               <i className="avatar-img"><FontAwesomeIcon  icon={faUser}/></i>
               </div>
           </div>
           <div className="inputs"> 
           <div className="row grid">
          <input  className="input-modify"  value={vorname}  onChange={handelVorname}  placeholder="Vorname" />
          <input type="text"  className="input-modify" value={nachname} onChange={handelNachname}  placeholder="Nachname"/>
          </div>
          
         <div className="row">
           <input  className="email input-modify"     value={email}  onChange={handelEmail} placeholder="Email" />
         </div>
          <div className="row grid third">
          <input type="text"   className="input-modify"  onChange={handelStr} value={str} placeholder="Straße"/>
          <input type="text"  className="input-modify" value={hausnr} onChange={handelHausnr}  placeholder="Hsnr." />
          </div>
          <div className="row grid fourth">
          <input type="text"   className="input-modify" onChange={handelPlz} value={plz}  placeholder="PLZ"  />
          <input type="text"   className="input-modify"  value={ort} onChange={handelOrt}  placeholder="Ort"  />
          </div>
          <div className="row grid fifth">
          <div className="btn-3">Abrechen</div>
          <div className="btn-2">Speichern</div>
          </div>
         
         
    
          
           </div>
         
        </div>
      
    )
}
