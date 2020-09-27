import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {errorAction} from "../Actions/errorAction"
import {validAction} from "../Actions/errorAction"
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom";
export default function Form() {


const dispatch = useDispatch();
 const [vorname, setvorname] = useState("");
 const [nachname, setnachname] = useState("");
 const [email, setemail] = useState("");
 const [str, setstr] = useState("");
 const [hausnr, sethausnr] = useState("");
 const [plz, setplz] = useState("");
 const [ort, setort] = useState("");
 const [error,seterror] = useState(false)

 // this function is for checking wether all the inputs are filled or not
  const isFilled=()=>{
  return (vorname !=="" && 
          nachname !=="" && 
          email !=="" && 
          str !=="" && 
          hausnr !=="" && 
          plz !=="")&& 
          ort!==""
 }

 //this function is for checking whether the email valid or not
 const isEmail=()=>{
   const regex = new RegExp(`^\\w*(\\-\\w)?(\\.\\w*)?@\\w*(-\\w*)?\\.\\w{2,3}(\\.\\w{2,3})?$`);
  
   if(regex.test(email)) return true ;
   else return false

 }

 const isWord=(word)=>{
    const regex = new RegExp(`^[a-zA-Z]{2,100}?$`);
    return(regex.test(word))
 }
 const move=()=>{
   
     dispatch(validAction());
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
    
    
        localStorage.setItem("vorname",vorname);
        localStorage.setItem("nachname",nachname);
        localStorage.setItem("email",email);
        localStorage.setItem("str",str);
        localStorage.setItem("hausnr",hausnr);
        localStorage.setItem("plz",plz);
        localStorage.setItem("ort",ort);  

    
    
     
}

// this part is for the inline Styling
const buttonStyle= isFilled()?"btn btn-enabled":"btn btn-disabled"
 
 const SuccessButton =  <Link className={buttonStyle} onClick={generateUser} to="loaduser">User generieren</Link>
 const FailButton =   <div className={buttonStyle} onClick={()=>dispatch(errorAction())}>User generieren</div>

 const Button = isFilled()&&isEmail()?SuccessButton:FailButton
 
    return (
       
               
        <div className="form">
           <div className="avatar-box">
           <svg width="200px" height="200px">
           <circle cx="100" cy="100" r="98" stroke="green" stroke-width="4" fill="transparent" />
   
       </svg> 
               {/* <div  className="avatar-circle">
               <i className="avatar-img"><FontAwesomeIcon  icon={faUser}/></i>
               </div> */}
           </div>
           <div className="inputs"> 
           <div className="row grid">
          <input  classname={`filled-${isWord(vorname)}+ hi`}type="text" value={vorname} onChange={handelVorname}  placeholder="Vorname"/>
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
     
             {Button}
           </div>
          
        </div>
      
    )
}
