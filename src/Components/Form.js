import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
export default function Form() {

 const [vorname, setvorname] = useState("");
 const [nachname, setnachname] = useState("");
 const [email, setemail] = useState("");
 const [str, setstr] = useState("");
 const [hausnr, sethausnr] = useState("");
 const [plz, setplz] = useState("");
 const [ort, setort] = useState("");
 const [error,seterror] = useState(false)

 // this function is for checking wether all the inputs are filled or not
  const isValid=()=>{
  return (vorname !=="" && 
          nachname !=="" && 
          email !=="" && 
          str !=="" && 
          hausnr !=="" && 
          plz !=="")&& 
          ort!==""
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

// this function is for the generation of user

const generateUser=()=>{
    if(isValid){
        localStorage.setItem("vorname",vorname);
        localStorage.setItem("nachname",nachname);
        localStorage.setItem("email",email);
        localStorage.setItem("str",str);
        localStorage.setItem("email",email);
        localStorage.setItem("plz",plz);
        localStorage.setItem("ort",ort);  
    }
    else 
     seterror(true)
  
}

// this part is for the inline Styling
const buttonStyle= isValid()?"btn btn-enabled":"btn btn-disabled"
    return (
       
               
        <div className="form">
           <div className="avatar-box">
               <div  className="avatar-circle">
               <i className="avatar-img"><FontAwesomeIcon  icon={faUser}/></i>
               </div>
           </div>
           <div className="inputs"> 
           <div className="row grid">
          <input type="text" value={vorname} onChange={handelVorname}  placeholder="Vorname"/>
          <input type="text"  value={nachname} onChange={handelNachname} placeholder="Nachname"/>
          </div>
          
         <div className="row">
           <input  className="email" type="text" value={email} onChange={handelEmail} placeholder="Email"/>
         </div>
          <div className="row grid third">
          <input type="text"  value={str} onChange={handelStr} placeholder="Straße"/>
          <input type="text" value={hausnr} onChange={handelHausnr} placeholder="Hsnr."/>
          </div>
          <div className="row grid fourth">
          <input type="text"   value={plz} onChange={handelPlz} placeholder="PLZ"/>
          <input type="text"  value={ort} onChange={handelOrt} placeholder="Ort"/>
          </div>
         
          <div className={buttonStyle} onClick={generateUser}>User generieren</div>
           
           </div>
         
        </div>
      
    )
}
