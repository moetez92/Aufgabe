import React, { useState } from 'react'
import {validAction} from "../Actions/errorAction"
import {useDispatch} from "react-redux"
import {isEmail,isPlz,isHausnr} from "../Helpers/Helpers"
import {Link} from "react-router-dom";
import {errorAction} from "../Actions/errorAction"
export default function Modify() {


const dispatch = useDispatch();
 const [vorname, setvorname] = useState(localStorage.getItem("vorname"));
 const [nachname, setnachname] = useState(localStorage.getItem("nachname"));
 const [email, setemail] = useState(localStorage.getItem("email"));
 const [str, setstr] = useState(localStorage.getItem("str"));
 const [hausnr, sethausnr] = useState(localStorage.getItem("hausnr"));
 const [plz, setplz] = useState(localStorage.getItem("plz"));
 const [ort, setort] = useState(localStorage.getItem("ort"));
  

 
 const img = localStorage.getItem("img")
 const background={
  backgroundImage: "url(" + img + ")",
  backgroundRepeat  : 'no-repeat',
   backgroundPosition: 'center',
   backgroundSize: 'cover' 
}

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


const save=()=> {
    
    
  localStorage.setItem("vorname",vorname);
  localStorage.setItem("nachname",nachname);
  localStorage.setItem("email",email);
  localStorage.setItem("str",str);
  localStorage.setItem("hausnr",hausnr);
  localStorage.setItem("plz",plz);
  localStorage.setItem("ort",ort);  

 dispatch(validAction())




}
 

 

  const validHausnr=isHausnr(hausnr)?"valid":"invalid";
   const validPlz=isPlz(plz)?"valid":"invalid";
   const validemail=isEmail(email)?"valid":"invalid";


 
   const failSaveButton =   <Link className="btn-2" to="modify" onClick={()=>dispatch(errorAction())}>Speichern</Link>
   const successSaveButton =   <Link className="btn-2" to="loaduser"    onClick={save} >Speichern</Link>
    const saveButton= isHausnr(hausnr)&&isEmail(email)&&isPlz(plz)?successSaveButton:failSaveButton
 
    return (
       
               
        <div className="form">
        
        <div className="avatar-box">
               <div  style={background} className="avatar-circle">
                
               </div>
           </div>
           <div className="inputs"> 
           <div className="row grid">
          <input  className="input-modify"  value={vorname}  onChange={handelVorname}  placeholder="Vorname" />
          <input type="text"  className="input-modify" value={nachname} onChange={handelNachname}  placeholder="Nachname"/>
          </div>
          
         <div className="row">
           <input  className={`email input-modify ${validemail}`}   value={email}  onChange={handelEmail} placeholder="Email" />
         </div>
          <div className="row grid third">
          <input type="text"   className="input-modify"  onChange={handelStr} value={str} placeholder="Straße"/>
          <input type="text"  className={`input-modify ${validHausnr}`} value={hausnr} onChange={handelHausnr}  placeholder="Hsnr." />
          </div>
          <div className="row grid fourth">
          <input type="text"   className={`input-modify ${validPlz}`} onChange={handelPlz} value={plz}  placeholder="PLZ"  />
          <input type="text"   className="input-modify"  value={ort} onChange={handelOrt}  placeholder="Ort"  />
          </div>
          <div className="row grid fifth">
          <Link className="btn-3" to="loaduser" onClick={()=>dispatch(validAction())}>Abrechen</Link>
         {saveButton}
          </div>
         
         
    
          
           </div>
         
        </div>
      
    )
}
