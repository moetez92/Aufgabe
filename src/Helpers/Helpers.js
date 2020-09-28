 //this function is for checking whether the email valid or not
 export const isEmail=(email)=>{
    const regex = new RegExp(`^\\w*(\\-\\w)?(\\.\\w*)?@\\w*(-\\w*)?\\.\\w{2,3}(\\.\\w{2,3})?$`);
   
    if(regex.test(email)) return true ;
    else return false
 
  }

 //this function is for checking whether a   word valid or not
 export  const isWord=(word)=>{
    const regex = new RegExp(`^[a-zA-Z]{2,100}?$`);
    return(regex.test(word))
 }
//this function is for checking whether the PLZ valid (5 digits) or not
 export  const isPlz=(word)=>{
   const regex = new RegExp(`^\\d\\d\\d\\d\\d$`);
   return(regex.test(word))
}
//this function is for checking whether the Hausnr valid (2 digits) or not
export  const isHausnr=(word)=>{
   const regex = new RegExp(`^\\d\\d`);
   return(regex.test(word))
}

 

