const loadingReducer = (state=true,action)=>{

    switch(action.type){
        case "loading": return state=true ;
        case "loaded": return state=false;
        default: return state ;
   }
 
 }
 
 export default loadingReducer ;