import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {errorAction} from "../Actions/errorAction"
import {validAction} from "../Actions/errorAction"
import {load} from "../Actions/loadAcion"
import {isEmail,isWord} from "../Helpers/Helpers"
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
 const [percentage,setpercentage] = useState(0)

  
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




 const calc=()=>{
    var nnf=0
    if(vorname !=="" ){nnf+=1}
    if(nachname !=="" ){nnf+=1}
    if(email !=="" ){nnf+=1}
    if(ort !=="" ){nnf+=1}
    if(plz !=="" ){nnf+=1}
    if(hausnr !=="" ){nnf+=1}
    if(str !=="" ){nnf+=1}
    return nnf ;
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

const generateUser=()=> {
    
    
        localStorage.setItem("vorname",vorname);
        localStorage.setItem("nachname",nachname);
        localStorage.setItem("email",email);
        localStorage.setItem("str",str);
        localStorage.setItem("hausnr",hausnr);
        localStorage.setItem("plz",plz);
        localStorage.setItem("ort",ort);  

       dispatch(load())

    
    
     
}

// this part is for the inline Styling
const buttonStyle= isFilled()?"btn btn-enabled":"btn btn-disabled"
 
 const SuccessButton =  <Link className={buttonStyle} onClick={generateUser} to="loaduser">User generieren</Link>
 const FailButton =   <div className={buttonStyle} onClick={()=>dispatch(errorAction())}>User generieren</div>

 const Button = isFilled()&&isEmail(email)?SuccessButton:FailButton

 const nbre = calc()
 
 
    return (
       
    
    <div className="">
  {nbre>0&&<p className="percentage">{`${nbre*10}%`}</p>}
<svg  className="circle" width="220px" height="221px">
  
   
   <circle   cx="100" cy="100" r="98" stroke="#10AC84" strokeDasharray={`${614*(nbre/10)} 614 ` } stroke-strokeDashoffset="200"  stroke-width="7" fill="transparent" />
 </svg>  
        <div className="form">
            <div className="avatar-box">
            <div  className="avatar-circle">
               <i className="avatar-img"><FontAwesomeIcon  icon={faUser}/></i>
        </div> 
            </div>
        
                 
          
           <div className="inputs"> 
           <div className="row grid">
          <input  className={`filled-${isWord(vorname)} add-input`} type="text" value={vorname} onChange={handelVorname}  placeholder="Vorname"/>
          <input type="text" className="add-input"  value={nachname} onChange={handelNachname} placeholder="Nachname"/>
          </div>
          
         <div className="row">
           <input  className="email  add-input" type="text" value={email} onChange={handelEmail} placeholder="Email"/>
         </div>
          <div className="row grid third">
          <input type="text" className="add-input"  value={str} onChange={handelStr} placeholder="Straße"/>
          <input type="text" className="add-input" value={hausnr} onChange={handelHausnr} placeholder="Hsnr."/>
          </div>
          <div className="row grid fourth">
          <input type="text"  className="add-input" value={plz} onChange={handelPlz} placeholder="PLZ"/>
          <input type="text"  className="add-input" value={ort} onChange={handelOrt} placeholder="Ort"/>
           
          </div>
     
             {Button}
           </div>
          
        </div>

    </div>

        
      
    )
}
