const apiReducer =  (img=null,action)=>{
  
     switch(action.type){
        case "load": 
          
        return action.payload
         default: return img ;
   }
 
}
export default apiReducer ;