import { loadingTrue } from "./loadingAction";
import { loadingFalse } from "./loadingAction";

export const load= () => async  dispatch =>{
 
     dispatch(loadingTrue())
   try{
    const response= await fetch("https://randomuser.me/api");
    const json = await response.json();
    const data = json.results[0].picture
    localStorage.setItem("img",data.large)
   
   
    dispatch(
        {
            type: "load",
            payload:data.large
       
        }
    )} catch(err){
    console.log(err)
   }
   dispatch(loadingFalse())
    }
