const errorReducer = (state=false,action)=>{

   switch(action.type){
       case "error": return state=true ;
       case "valid": return state=false;
       default: return state ;
  }

}

export default errorReducer ;